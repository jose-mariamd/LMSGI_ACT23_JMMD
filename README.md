## REGISTRO DE ESTUDIANTES
  
  Aplicación React que permite registrar estudiantes mediante un formulario       validado con Zod.
  
  El objetivo es simular un flujo real de trabajo: creación del proyecto, control de versiones, validación estricta de datos y documentación técnica

## DESCRIPCIÓN
  
  La aplicación permite introducir un nombre, una dirección de correo electrónico y un curso, validar los datos mediante un esquema estricto definido con Zod y generar un objeto JSON final.
  
  Si los datos son válidos, se muestra un mensaje de éxito; en caso contrario, se muestra un error que muestra exactamente el fallo cometido.

## TECNOLOGÍAS UTILIZADAS

-  React
-  Vite
-  Zod
-  JavaScript

## DESPLIEGUE
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/registro-estudiantes.git

# Entrar en el proyecto
cd registro-estudiantes

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

## DICCIONARIO DE DATOS
| Nombre del Campo | Tipo de Dato | Reglas de Validación |
|------------------|--------------|----------------------|
| nombre           | string       | Obligatorio, mínimo 3 caracteres |
| email            | string       | Obligatorio, formato email válido |
| curso            | string       | Obligatorio, solo "1 DAM" o "2 DAM" |

## AUTORÍA
  
  Desarrollado por **[José María](https://github.com/jose-mariamd)**

