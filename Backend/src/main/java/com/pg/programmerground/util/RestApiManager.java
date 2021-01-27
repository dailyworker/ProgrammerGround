package com.pg.programmerground.util;

import com.pg.programmerground.dto.GithubRepoDto;
import com.pg.programmerground.dto.GithubUserInfoDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.*;

public class RestApiManager {
    private HttpComponentsClientHttpRequestFactory factory;
    private RestTemplate restTemplate;
    private HttpHeaders header;
    private HttpEntity<?> entity;

    public RestApiManager() {
        this.factory = new HttpComponentsClientHttpRequestFactory();
        this.factory.setReadTimeout(5000);
        this.factory.setConnectionRequestTimeout(5000);
        this.restTemplate = new RestTemplate(this.factory);
        this.header = new HttpHeaders();
        this.entity = new HttpEntity<>(this.header);

    }

    /**
     * Github Api에서 받아온 유저 정보
     * Dto 참고
     */
    public GithubUserInfoDto getGithubUserInfo(String oAuthAccessToken) {
        HttpHeaders headers = new HttpHeaders();
        header.add("Authorization", "token " + oAuthAccessToken);
        return restTemplate.exchange("https://api.github.com/users", HttpMethod.GET, new HttpEntity<>(headers), GithubUserInfoDto.class).getBody();
    }


}