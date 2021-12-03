package com.example.codeclan.NewsAppService.controllers;



import com.example.codeclan.NewsAppService.models.Journalist;
import com.example.codeclan.NewsAppService.models.Journalist;
import com.example.codeclan.NewsAppService.repositories.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.codeclan.NewsAppService.repositories.JournalistRepository;

import java.util.List;

@RestController
/*The class is flagged as a @RestController, meaning it is ready for use by Spring MVC to handle web
requests.*/
public class JournalistController {

    @Autowired
    JournalistRepository journalistRepository;

    @GetMapping(value="/journalists")
    //@GetMapping maps / to the index() method.
    public ResponseEntity<List<Journalist>> getAllJournalists(){
        return new ResponseEntity<>(journalistRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/journalists/{id}")
    public ResponseEntity getJournalist(@PathVariable Long id){
        return new ResponseEntity<>(journalistRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/journalists")
    public ResponseEntity<Journalist> postJournalist(@RequestBody Journalist journalist){
        journalistRepository.save(journalist);
        return new ResponseEntity<>(journalist, HttpStatus.CREATED);
    }

    @PatchMapping(value="/journalists/{id}")
    public ResponseEntity<Journalist> updateJournalist(@RequestBody Journalist journalist){
        journalistRepository.save(journalist);
        return new ResponseEntity<>(journalist, HttpStatus.OK);
    }

    @DeleteMapping(value="/journalists/{id}")
    public ResponseEntity<Journalist> deleteJournalist(@PathVariable Long id){
        Journalist found = journalistRepository.getOne(id);
        journalistRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
