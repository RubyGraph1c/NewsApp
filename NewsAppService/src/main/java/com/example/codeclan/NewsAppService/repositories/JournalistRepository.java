package com.example.codeclan.NewsAppService.repositories;


import com.example.codeclan.NewsAppService.models.Journalist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
