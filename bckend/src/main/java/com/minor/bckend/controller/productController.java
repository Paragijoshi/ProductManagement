package com.minor.bckend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.minor.bckend.model.product;
import com.minor.bckend.service.productService;
import com.minor.bckend.service.productServiceImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class productController {

    @Autowired
    private productService productSer;

    // saving the product
    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody product Pro) {
        return new ResponseEntity<>(productSer.saveProduct(Pro), HttpStatus.CREATED);
    }

    // getting product from database
    @GetMapping("/")
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<>(productSer.getAllProduct(), HttpStatus.OK);
    }

    // getting product by id
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productSer.getProductById(id), HttpStatus.OK);
    }

    // deleting the prduct
    @GetMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        return new ResponseEntity<>(productSer.deleteProduct(id), HttpStatus.OK);
    }

    @PostMapping("/editProduct/{id}")
    public ResponseEntity<?> editProduct(@RequestBody product Pro, @PathVariable Integer id) {
        return new ResponseEntity<>(productSer.editProduct(Pro, id), HttpStatus.CREATED);
    }

}
