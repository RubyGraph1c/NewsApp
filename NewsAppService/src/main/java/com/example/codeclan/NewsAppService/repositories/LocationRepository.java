package com.example.codeclan.NewsAppService.repositories;


import com.example.codeclan.NewsAppService.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

}
