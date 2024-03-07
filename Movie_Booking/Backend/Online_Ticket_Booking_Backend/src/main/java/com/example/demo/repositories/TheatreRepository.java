package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Theatre;


@Repository
public interface TheatreRepository extends JpaRepository<Theatre, Integer> {

}
