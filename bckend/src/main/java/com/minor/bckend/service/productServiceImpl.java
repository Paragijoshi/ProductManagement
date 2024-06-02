package com.minor.bckend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minor.bckend.model.product;
import com.minor.bckend.repository.productRepository;

@Service
public class productServiceImpl implements productService {

    @Autowired
    private productRepository productRepo;

    @Override
    public product saveProduct(product obj) {
        return productRepo.save(obj);
    }

    @Override
    public List<product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public product getProductById(Integer id) {
        return productRepo.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        product obj = productRepo.findById(id).get();
        if (obj != null) {
            productRepo.delete(obj);
            return "Product deleted succesfully";
        }
        return "Something went wrong";
    }

    @Override
    public product editProduct(product p, Integer id) {
        product oldproduct = productRepo.findById(id).get();
        oldproduct.setProductName(p.getProductName());
        oldproduct.setDescription(p.getDescription());
        oldproduct.setPrice(p.getPrice());
        oldproduct.setStatus(p.getStatus());
        return productRepo.save(oldproduct);
    }

}
