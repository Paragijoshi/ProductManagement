package com.minor.bckend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minor.bckend.model.product;

public interface productRepository extends JpaRepository<product, Integer> {

}