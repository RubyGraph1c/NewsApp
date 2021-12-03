package com.example.codeclan.NewsAppService.repositories;

import com.example.codeclan.NewsAppService.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}