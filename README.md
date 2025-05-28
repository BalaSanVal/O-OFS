# React + Vite Project

Este repositorio contiene un proyecto creado con **React** usando el entorno de desarrollo ultrarrápido de **Vite**. Aquí mantengo el código que estoy desarrollando de manera personal y académica.

---

## 🚀 Iniciar el proyecto

```bash
npm install   # Instalar dependencias (solo la primera vez)
npm run dev   # Iniciar el servidor de desarrollo
```

📦 Comandos útiles para Git
```bash
git add .                         # Agrega todos los archivos al staging
git commit -m "mensaje del commit"  # Crea un commit con un mensaje
git push                          # Envía los cambios al repositorio remoto
```

## 🚀 Deploy manual a GitHub Pages

Si deseas publicar manualmente tu proyecto en GitHub Pages usando la carpeta `dist` generada por Vite, sigue estos pasos:

```bash
# Cambiar a la rama gh-pages (o crearla si no existe)
git checkout gh-pages

# Agregar todo el contenido de la carpeta dist como si fuera el root del repositorio
git --work-tree dist add --all

# Hacer commit de los archivos generados
git --work-tree dist commit -m "Actualización de logo"

# Subir los archivos a GitHub Pages (rama gh-pages)
git push origin gh-pages --force

# Regresar a la rama principal del proyecto
git checkout main
```
⚠️ Asegúrate de que vite.config.js tenga correctamente la base:

base: '/NOMBRE-DEL-REPOSITORIO/',

👨‍💻 Autor
Balam Sánchez Valdivia
 
Descripción del proyecto:

Este es un proyecto personalizado para un estudio de entrenamiento fisico y pueda hacer presencia de forma digital.

