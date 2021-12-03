package com.example.codeclan.NewsAppService.repositories;


import com.example.codeclan.NewsAppService.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
