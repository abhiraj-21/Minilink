package io.github.abhiraj_21.minilink.Repository;

import io.github.abhiraj_21.minilink.Entities.ClickEvent;
import io.github.abhiraj_21.minilink.Entities.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent, Long> {
    List<ClickEvent> findByUrlMappingAndClickDateBetween(UrlMapping urlMapping, LocalDateTime startDate, LocalDateTime endDate);
    List<ClickEvent> findByUrlMappingInAndClickDateBetween(List<UrlMapping>  urlMapping, LocalDateTime startDate, LocalDateTime endDate);
}
