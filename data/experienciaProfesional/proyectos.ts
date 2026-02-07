export const proyectos = [
    {
        titulo: "Sistema de Facturación Acueducto y Alcantarillado de Santander de Valencia",
        imagen: ["/experiencia/acueducto/Acueducto.png"],
        tecnologias: [
            "Python",
            "Flask",
            "React",
            "MySQL"
        ],
        repositorio: "https://github.com/07Humberto-Mueses/Acueducto",
        detalles: [
            {
                "/experiencia/acueducto/Acueducto1.png": "El inicio de la aplicacion muestra un panel para iniciar sesion con un usuario, contraseña y el rol establecido.",
                "/experiencia/acueducto/Acueducto2.png": "El panel principal de la aplicacion muestra una descripcion de las diferentes funcionalidades del sistema de facturacion.",
                "/experiencia/acueducto/Acueducto3.png": "Para el panel de navegacion de implemento un menu lateral con las diferentes opciones del sistema de facturacion deacuerdo al rol del usuario, administrador, contador o secretario(a).",
                "/experiencia/acueducto/Acueducto4.png": "Aqui se muestran las opciones del sistema por cada modulo implementado.",
                "/experiencia/acueducto/Acueducto5.png": "Para el modulo de facturacion miramos la opción de Crear Factura con una interfaz de la factura que se generara en formato PDF, se rellena el campo de la matricula y automaticamente se rellenan los campos basicos del cliente, luego se completa los demas campos y se da clic en el boton Guardar Factura y Exportar Factura en PDF",
                "/experiencia/acueducto/Acueducto6.png": "La ventana emergente que se muetra al darle clic en el boton Facturas Automáticas muestra la vista previa de la plantilla de la factura y un boton en la parte inferior para generar las facturas de todos los clientes registrados en el sistema como tipo de matricula estandar",
                "/experiencia/acueducto/Acueducto7.png": "Esta ventana emergente muestra las facturas generadas por el sistema con el estado de pagada o pendiente ademas de unos filtros para agrupar las facturas por fecha.",
                "/experiencia/acueducto/Acueducto8.png": "Para esta opción de Clientes se muestra un formulario para registrar a los clientes y unos botones auxiliares para la manipulacion de los datos.",
                "/experiencia/acueducto/Acueducto9.png": "El boton de ver matriculas ubicado en la parte derecha del usuario registrado permite actualizar el estado del mismo y ver todas las matriculas asociadas a ese cliente.",
                "/experiencia/acueducto/Acueducto10.png": "Para esta opción de Multas permite ingresar el documento del cliente, buscar y seleccionar la matricula a la cual se le va aplicar la multa y luego registrarla.",
                "/experiencia/acueducto/Acueducto11.png": "La ventana emergente al presionar el boton de Mostrar Multas deja mirar todas las multas registradas a los clientes.",
                "/experiencia/acueducto/Acueducto12.png": "Este apartado de Matriculas sirve para registrar todas las matriculas de cada cliente, un cliente puede tener una o varias matriculas y aqui se las registra con un tipo estandar que se refiere a un valor fijo por mes y el costo de registrar esta matricula ademas de la direccion de la residencia.",
                "/experiencia/acueducto/Acueducto13.png": "La otra opción para el tipo de matricula es como Medidor con la cual se genera la factura dependiendo del consumo registrado en el medidor.",
                "/experiencia/acueducto/Acueducto14.png": "Ingresando el numero de documento del cliente y con el boton Buscar matriculas se mira todas las matriculas registradas para ese cliente con su respectivas caracteristicas de ingreso y seleccion para editar el tipo de matricula.",
                "/experiencia/acueducto/Acueducto15.png": "El boton de Mostrar Todo genera esta ventana que muestra los detalles de todas las matriculas registradas.",
                "/experiencia/acueducto/Acueducto16.png": "Por último en este modulo de facturacion encontramos la opción de pago para todas las facturas que se generan, primero esta la opción de registrar el pago de la factura de los servicios y que dependiendo del tipo de factura ya sea estandar o medidor se registrara en el historial de pagos y cambiara el estado segun corresponda.",
                "/experiencia/acueducto/Acueducto17.png": "Al digitar la el numero de factura se rellenan los campos del total de la factura y el valor pendiente por pagar de esa factura y con el valor a cancelar se registra cuanto cancelara el cliente. Las opciones en el tipo de pago por tiempo se aplican para las facturas estandar que si cancelan semestral o anual entonces no se generara mas facturas por este periodo hasta que se consuma el valor que cancelo el cliente.",
                "/experiencia/acueducto/Acueducto18.png": "Para registrar el pago de la multa que se genero se ingresa el numero de la multa, automaticamente se trae el valor total y el pendiente y se tiene que digitar el valor que se va a cancelar para registrar el pago con el boton Guardar Pago.",
                "/experiencia/acueducto/Acueducto19.png": "Para registrar el pago de la matricula que se genero se ingresa el numero de la matricula, automaticamente se trae el valor total y el pendiente y se tiene que digitar el valor que se va a cancelar para registrar el pago con el boton Guardar Pago.",
                "/experiencia/acueducto/Acueducto20.png": "Los pagos realizados se pueden visualizar dando clic en el boton de Ver Historial de la opción Pagos y filtrando con las opciones disponibles.",
                "/experiencia/acueducto/Acueducto21.png": "Para el modulo de Contabilidad primero miramos la opción de Ingresos donde se registrara los recursos obtenidos por otros medios diferentes a los servicios prestados por el acueducto.",
                "/experiencia/acueducto/Acueducto22.png": "El boton de Listar Todos muestra una ventana emergente con unos filtros para mirar los ingresos registrados en el sistema y unas metricas basicas que son Total de ingresos, Total Egresos y Total en Caja. Ademas de la opción de generar un archivo PDF con el reporte generado.",
                "/experiencia/acueducto/Acueducto23.png": "Para esta opción de Egresos se puede registrar egresos de efectivo o de productos adquiridos para el acueducto, ingresando los datos del formulario.",
                "/experiencia/acueducto/Acueducto24.png": "Con la opción de Listar Todos se muestra unos filtros para mirar todos los egresos que se han realizado ademas de la opción de editar si es necesario.",
                "/experiencia/acueducto/Acueducto25.png": "Esta opción de Inventario deja registrar objetos fisicos que se adquieren para el acueducto y que se pueden controlar en esta opción.",
                "/experiencia/acueducto/Acueducto26.png": "Para este módulo de Configuracion que unicamente es accesible para el rol de Administrador, seencuentra la opcion de Crear Usuario donde se puede registrar en el sistema las credenciales de las personas que manipularan el sistemade facturacion.",
                "/experiencia/acueducto/Acueducto27.png": "Esta opcion de Listar Usuarios permite visualizar todos los usuarios registrados en el sistema de facturacion con los detalles basicos y el estado actual de cada uno.",
                "/experiencia/acueducto/Acueducto28.png": "El boton de Editar Estado que se encuentra en cada usuario permite seleccionar al usuario y activar o inactivar su cuenta como medida de seguridad y control.",
                "/experiencia/acueducto/Acueducto29.png": "Para la opcion de Ver Historial de Movimientos se muestra un boton que lleva a una ventana emergente con un registro detallado de las acciones realizadas por cada usuario en el sistema.",
                "/experiencia/acueducto/Acueducto30.png": "La ventana emergente contiene un par de filtros para que la informacion se muestre de manera organizada y la en el detallado de la tabla se muestra en detalle el cambio realizado por el usuario",
                "/experiencia/acueducto/Acueducto31.png": "Para la opcion de Gestionar Tarifas miramos la relacion primero con la tarifa estandar, esta tarifa es fija y representa el valor que cada mes debe cancelar el cliente por el servicio basico del acueducto. Cada factura automatica que se genera se graba con esta tarifa y el pago mensual, semestral o anual que se realice depende de este valor.",
                "/experiencia/acueducto/Acueducto32.png": "Para la tarifa del medidor se configura en esta opcion y representa el costo por metro cubico consumido de agua. Para generar una factura con este tipo de tarifa hay que registrar el consumo del medidor.",
                "/experiencia/acueducto/Acueducto33.png": "Este es el módulo final del sistema que es comun para todos los roles y es el que controla la salida segura con el boton de Salir y ademas la opcion para cambiar la contraseña del usuario autenticado."
            }
        ]
    },
    {
        titulo: "MentaMática",
        imagen: ["/experiencia/mentamatica/Mentamatica.png"],
        tecnologias: [
            "NextJs",
            "Neon",
            "PostgreSql",
            "Gsap",
            "Clerk",
            "DiceBear"
        ],
        repositorio: "https://github.com/07Humberto-Mueses/mentamatica_app",
        detalles: [
            {
                "/experiencia/mentamatica/Mentamatica1.png": "Esta aplicacion web fue realizada con el objetivo de implementar la neurociencia cognitiva como apoyo en el aprendizaje de matematicas en niños de segundo grado de primaria. Se puede identificar los modulos de aprendizaje incluidos.",
                "/experiencia/mentamatica/Mentamatica2.png": "Miramos los dos botones para hacer el registro y el inicio de sesion obligatoria para usar la aplicacion",
                "/experiencia/mentamatica/Mentamatica3.png": "Las tematicas que se trabajan en la aplicacion son el resultado del levantamiento de requerimientos que se hizo en la investigacion. Se puede visualizar un manual de uso para los padres de familia y tambien uno para los usuarios reales que serian los niños; estos contienen una vision general de como funciona la aplicacion, su navegacion y como se deben interpretar las metricas implementadas",
                "/experiencia/mentamatica/Mentamatica4.png": "Para el registro y el inicio de sesion se utiliza la platafaroma Clerk que ofrece la facilidad de implementar una autenticacion rapida, segura y facil y asi enfocarnos en el contenido y la demas funcionalidades de la plataforma",
                "/experiencia/mentamatica/Mentamatica5.png": "Una vez iniciado este es el panel principal que se muestra con los contenidos y todas las metricas implementadas; estas metricas se obtienen a traves de consultas a la base de datos y fueron formuladas durante la creacion del sistema, con el objetivo de que favorezcan en la comprension y progreso que tiene el usuario. Con el registro enlazado al inicio se van guardando los datos, de manera que el adulto a cargo tiene el control total del progreso y la interaccion que tiene el niño o niña con la aplicación",
                "/experiencia/mentamatica/Mentamatica6.png": "En la parte inferior del panel se muestra informacion relacionada con la neurociencia cognitiva para que los padres o los responsables esten informados de la importancia que tiene esta ciencia en el desarrollo de sus hijos y apoyen sus procesos.",
                "/experiencia/mentamatica/Mentamatica7.png": "En la parte superior se encuentra un icono de cerebro para mostrar una ventana emergente con mensajes especificos de estimulacion cognitiva para los niños.",
                "/experiencia/mentamatica/Mentamatica8.png": "Para la configuracion encontramos un boton en la parte superior derecha, ahi se miran 4 partes: sonidos, ayuda, Mi avatar y caracteristicas de la dinamica de los juegos.",
                "/experiencia/mentamatica/Mentamatica9.png": "Esta personalizacion del avatar es una de las mas importantes de la aplicacion, es la manera que se implementa para que los niños encuentren una motivacion constante y visualmente atractiva. Pueden desbloquear las caracteristicas que se muestran en la pantalla y jugar como ellos quieran con la figura a la derecha y guardar esa personalizacion en el estado y tambien como imagen en sus equipos. La API DiceBear ofrece esta personalizacion y nosotros la incluimos en nuestra aplicacion.",
                "/experiencia/mentamatica/Mentamatica10.png": "Esta animacion se muestra en cada uno de los modulos como herramienta visual para preparar al niño para los juegos.",
                "/experiencia/mentamatica/Mentamatica11.png": "En el panel de cada modulo se muestra un video relacioado con el tema y los juegos desarrollados, las metricas que se guardan con cada desarrollo del juego se guardan en forma de monedas y estrellas: el maximo son 3 estrellas cuando no comete ningun error y el intento que obtuvo mayor cantidad de estrellas se pintara en la parte inferior, el reconocimiento de las estrellas se traducen en monedas que se van acumulando en forma global con todos los juegos de todos los modulos y que se pueden gastar en la personalizacion del avatar porque de inicio todas las caracteristicas estaran bloqueadas.",
                "/experiencia/mentamatica/Mentamatica12.png": "La base de datos se encuentra en la nube con la plataforma Neon, es facil de implementar y favorece a la accesibilidad en cualquier momento y desde cualquier lugar.",
                "/experiencia/mentamatica/Mentamatica13.png": "En la autenticacion que se realiza con Clerk tambien se encuentra en la nube y conectada directamente a la aplicacion, permite administrar y validar a los usuarios con sus correos y su configuracion permite varidad de caracteristicas."
            },
        ]
    },
    {
        titulo: "Sistema de Gestion Documental Clinica Nuestra Señora de Fátima",
        imagen: ["/experiencia/clinica/Clinica.png"],
        tecnologias: [
            "NextJs",
            "TailwindCSS",
            "React"
        ],
        repositorio: "https://github.com/07Humberto-Mueses/proyecto-clinica-fatima",
        detalles: [
            {
                "/experiencia/clinica/Clinica1.png": "La Clinica Nuestra Señora de Fatima como institucion prestadora de servicios de salud es una de las mas reconocidas en el departamento de Nariño y este sistema se desarrolla con el fin de ayudar en los procesos internos de la empresa.",
                "/experiencia/clinica/Clinica2.png": "Como objetivos iniciales del proyecto se propone esta interfaz visual para el acceso a la aplicacion y un pie de pagina que direccionan a las diferentes redes sociales de la clinica.",
                "/experiencia/clinica/Clinica3.png": "En esta visual se presenta la organizacion de toda la entidad de salud, cada area y proceso pertenece a alguno de estos grupos; el objetivo de este proyecto es presentar una visualizacion clara e intuitiva de cada formato que hace parte del SGC, ya que es uno de los pilares de la clinica.",
                "/experiencia/clinica/Clinica4.png": "Para la navegacion se presentan dos variaciones, algunos subprocesos contienen unas dependencias y esas dependencias se tienen en cuenta para la navegacion y visualizacion, y luego en el espacio de trabajo se presentarian los formatos que pertenece a lo seleccionado.",
                "/experiencia/clinica/Clinica5.png": "En el area de admisiones y facturacion se realiza una implementacion: a traves de archivos excel cargados se puede hacer una busqueda de un servicio que se deba realizar en otra entidad y se analiza los resultados de cada archivo que es referencia de una entidad externa para elegir la mas conveniente.",
                "/experiencia/clinica/Clinica6.png": "Otra de las implementaciones que se realiza es para la parte de contratacion: permite cargar archivos excel con informacion para contratacion con las EPS y posteriormente ajustar las tarifas para elegir una que si represente ganancias para la clinica."
            },
        ]
    }
]