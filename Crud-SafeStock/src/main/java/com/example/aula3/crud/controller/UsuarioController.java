package com.example.aula3.crud.controller;

import com.example.aula3.crud.model.Usuario;
import com.example.aula3.crud.crudRepository.UsuarioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
        public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // GET - listar os Usuarios por id
    @GetMapping("/{id}")
    public Optional<Usuario> listarUsuarioPorId(@PathVariable Long id){
        return usuarioRepository.findById(id);
    }

    @GetMapping
    public List<Usuario> listarUsuario(){
        return usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario adicionarUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }



    @DeleteMapping("/{id}")
    public String removerUsuario(@PathVariable Long id){
        usuarioRepository.deleteById(id);
        return "Usuario removido com sucesso!";
    }

    @PutMapping("/{id}")
    public Usuario atualizarUsuario(@PathVariable Long id, @RequestBody Usuario novoUsuario){
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNome(novoUsuario.getNome());
            usuario.setEmail(novoUsuario.getEmail());
            usuario.setSenha(novoUsuario.getSenha());
            usuario.setTelefone(novoUsuario.getTelefone());
            usuario.setCargo(novoUsuario.getCargo());
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario não Encontrado"));
    }


}
