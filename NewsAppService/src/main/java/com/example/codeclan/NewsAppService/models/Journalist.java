package com.example.codeclan.NewsAppService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
//@Entity is a JPA annotation that denotes the whole class for storage in a relational table.
@Table(name = "journalists")
public class Journalist{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /*@Id and @GeneratedValue are JPA annotations to note the primary key and that is generated
     automatically when needed. */
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name= "image", length=10000)
    private String image;

    @JsonIgnoreProperties(value = "journalist")
    @OneToMany(mappedBy = "journalist", fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Article> articles;

    public Journalist(String name, String image) {
        this.name = name;
        this.image = image;
        this.articles = new ArrayList<>();
    }

    public Journalist() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
