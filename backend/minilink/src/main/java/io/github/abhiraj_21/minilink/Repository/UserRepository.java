package io.github.abhiraj_21.minilink.Repository;

import io.github.abhiraj_21.minilink.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
