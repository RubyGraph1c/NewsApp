package com.example.codeclan.NewsAppService.controllers;


import com.example.codeclan.NewsAppService.models.Role;
import com.example.codeclan.NewsAppService.models.Role;
import com.example.codeclan.NewsAppService.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.codeclan.NewsAppService.repositories.RoleRepository;

import java.util.List;

@RestController
public class RoleController {

    @Autowired
    RoleRepository roleRepository;

    @GetMapping(value="/roles")
    public ResponseEntity<List<Role>> getAllRoles(){
        return new ResponseEntity<>(roleRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/roles/{id}")
    public ResponseEntity getRole(@PathVariable Long id){
        return new ResponseEntity<>(roleRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/roles")
    public ResponseEntity<Role> postRole(@RequestBody Role role){
        roleRepository.save(role);
        return new ResponseEntity<>(role, HttpStatus.CREATED);
    }

    @PatchMapping(value="/roles/{id}")
    public ResponseEntity<Role> updateRole(@RequestBody Role role){
        roleRepository.save(role);
        return new ResponseEntity<>(role, HttpStatus.OK);
    }

    @DeleteMapping(value="/roles/{id}")
    public ResponseEntity<Role> deleteRole(@PathVariable Long id){
        Role found = roleRepository.getOne(id);
        roleRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
