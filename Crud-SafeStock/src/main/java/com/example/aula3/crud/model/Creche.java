package com.example.aula3.crud.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Check;


@Entity
@Table(name="creche")
public class Creche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoCreche tipoCreche;

    public Creche() {};
    public Creche(String nome, TipoCargo tipoCreche) {};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoCreche getTipoCreche() {
        return tipoCreche;
    }

    public void setTipoCreche(TipoCreche tipoCreche) {
        this.tipoCreche = tipoCreche;
    }



}
