package com.example.aula3.crud.crudRepository;

import com.example.aula3.crud.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
    public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
}

