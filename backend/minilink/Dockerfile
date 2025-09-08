# --- Stage 1: Build with Java 24 JDK ---
FROM eclipse-temurin:24-jdk AS build

WORKDIR /app

# Copy Maven wrapper and make it executable
COPY mvnw ./
COPY .mvn/ .mvn/
RUN chmod +x mvnw

# Copy pom.xml and download dependencies
COPY pom.xml ./
RUN ./mvnw dependency:go-offline

# Copy source code and build the app
COPY src ./src
RUN ./mvnw clean package -DskipTests


# --- Stage 2: Run with Java 24 JRE ---
FROM eclipse-temurin:24-jre

WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
