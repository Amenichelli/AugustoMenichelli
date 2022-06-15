    // 1) y 2)
    class Usuario {
        constructor(nombre, apellido, libros, mascotas) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
        }

        // 3)
        getFullName() {
            return `Usuario: ${this.nombre} ${this.apellido}.`;
        }

        addMascota(newMascota) {
            this.mascotas.push(newMascota);
        }

        countMascotas() {
            return this.mascotas.length;
        }

        addBook(book, autor) {
            this.libros.push({
                "nombre": book,
                "autor": autor
            });
        }

        getBookNames() {
            let nombresLibros = []
            this.libros.forEach(item => nombresLibros.push(item.nombre));
            return nombresLibros;
        }
    }

    let mascotas = ["Perro", "Gato"];
    let libros = [{
                "nombre": "El señor de las moscas",
                "autor": "William Golding"
            },
            {
                "nombre": "Fundacion",
                "autor": "Isaac Asimov"
            }
        ]
        // 4)
    let usuario = new Usuario("Julio", "Márquez", libros, mascotas);
    console.log(usuario.getFullName());

    usuario.addMascota("Cocodrilo");
    usuario.addMascota("Terodáctilo");

    console.log(`Cantidad de Mascotas: ${ usuario.countMascotas() }.`);

    usuario.addBook("Gwendy´s final task", "Stephen King")

    console.log(usuario.getBookNames());