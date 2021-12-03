package com.example.codeclan.NewsAppService.controllers;

import com.example.codeclan.NewsAppService.models.Category;
import com.example.codeclan.NewsAppService.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping(value="/categories")
    public ResponseEntity<List<Category>> getAllCategorys(){
        return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/categories/{id}")
    public ResponseEntity getCategory(@PathVariable Long id){
        return new ResponseEntity<>(categoryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/categories")
    public ResponseEntity<Category> postCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PatchMapping(value="/categories/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping(value="/categories/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id){
        Category found = categoryRepository.getOne(id);
        categoryRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}