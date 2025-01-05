package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "stocks")  // Explicit table name
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "ticker", nullable = false, unique = true)
    private String ticker;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "buy_price", nullable = false)
    private double buyPrice;

    // Getters and setters
}
