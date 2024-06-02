package com.minor.bckend.service;

import com.minor.bckend.model.product;
import java.util.*;

public interface productService {

    public product saveProduct(product PRO);

    public List<product> getAllProduct();

    public product getProductById(Integer id);

    public String deleteProduct(Integer id);

    public product editProduct(product p, Integer id);

}
