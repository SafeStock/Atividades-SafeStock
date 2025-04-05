package com.example.aula3.crud.crudRepository;

import com.example.aula3.crud.model.Creche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CrecheRepository extends JpaRepository<Creche, Long>{

}

