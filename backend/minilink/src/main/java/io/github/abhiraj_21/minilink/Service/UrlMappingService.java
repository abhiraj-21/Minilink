package io.github.abhiraj_21.minilink.Service;

import io.github.abhiraj_21.minilink.Entities.UrlMapping;
import io.github.abhiraj_21.minilink.Entities.User;
import io.github.abhiraj_21.minilink.Repository.UrlMappingRepository;
import io.github.abhiraj_21.minilink.dto.UrlMappingDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@AllArgsConstructor
public class UrlMappingService {

    private final UrlMappingRepository urlMappingRepository;

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {

        String shortUrl = generateShortUrl(originalUrl);
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        urlMapping.setClickCount(0);
        urlMapping.setCreatedAt(LocalDateTime.now());

        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);
        return convertToDTO(savedUrlMapping);
    }

    private UrlMappingDTO convertToDTO(UrlMapping urlMapping){
        UrlMappingDTO dto = new UrlMappingDTO();
        dto.setId(urlMapping.getId());
        dto.setOriginalUrl(urlMapping.getOriginalUrl());
        dto.setShortUrl(urlMapping.getShortUrl());
        dto.setClickCount(urlMapping.getClickCount());
        dto.setCreatedAt(urlMapping.getCreatedAt());
        dto.setUsername(urlMapping.getUser().getUsername());
        return dto;
    }

    private String generateShortUrl(String originalUrl) {
        String characters = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder shortUrl = new StringBuilder(7); //The length of the short URL would be 7
        Random random = new Random();   //To generate random characters for our short URL
        for(int i = 0; i<7; i++){
            shortUrl.append(characters.charAt(random.nextInt(characters.length())));
        }
        return shortUrl.toString();
    }
}
