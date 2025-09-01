package io.github.abhiraj_21.minilink.Repository;

import io.github.abhiraj_21.minilink.Entities.UrlMapping;
import io.github.abhiraj_21.minilink.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {

    UrlMapping findByShortUrl(String shortUrl);
    List<UrlMapping> findByUser(User user);

}
