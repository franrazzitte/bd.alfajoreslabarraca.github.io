// "SIN" == Sin Stock | "" == Consultar precio.

const preciosDesactualizados = true

const alfajores = [
  {
    "id": "Chocolate Intenso",
    "name": "Cacao Intenso",
    "desc": "Sumergite en la intensidad del cacao con nuestro Alfajor Chocolate Intenso.<br>Dos tapas de cacao puro, con un equilibrio perfecto entre textura y sabor, envuelven un generoso relleno de dulce de leche repostero.<br>Para coronar esta experiencia, un baño de chocolate semiamargo realza cada bocado con su profundidad y suavidad.<br>Un clásico irresistible para los amantes del cacao en su máxima expresión.<br><br>Peso neto 75grs.",
    "price": "$2000",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/2943239592391020/5491120518253"
  },
  {
    "id": "Chocolate Suave",
    "name": "Clásico",
    "desc": "Disfrutá de la suavidad y el equilibrio perfecto con nuestro Alfajor Chocolate Suave.<br>Dos tapas de cacao delicado, con una textura esponjosa y un sabor sutil, envuelven un generoso relleno de dulce de leche repostero.<br>Todo bañado en chocolate semiamargo, que aporta el toque justo de intensidad sin opacar su dulzura.<br>Una experiencia armoniosa para quienes prefieren un alfajor de sabor equilibrado y envolvente.<br><br>Peso neto 75grs.",
    "price": "$2000",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/3772179199521813/5491120518253"
  },
  {
    "id": "Chocolate Blanco",
    "name": "Blanco",
    "desc": "Dejate sorprender por la exquisita combinación de nuestro Alfajor Chocolate Blanco.<br>Dos tapas de cacao suave, con una textura esponjosa y un sabor equilibrado, envuelven un corazón de dulce de leche repostero.<br>Todo cubierto con un baño de chocolate blanco que aporta cremosidad y un dulzor irresistible.<br>Un alfajor elegante y tentador, ideal para los amantes de los sabores dulces y sofisticados.<br><br>Peso neto 75grs.",
    "price": "$2000",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/2648568928598208/5491120518253"
  },
  {
    "id": "Chocolate con Leche",
    "name": "Chocolate con Leche",
    "desc": "El chocolate con leche al tener menos cacao en su composición, se diferencia por ser más dulce que el chocolate negro. Su relleno de dulce de leche le da un sabor especial a éste riquísimo alfajor.<br>Peso neto 75grs.",
    "price": "",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/2867341769987819/5491120518253"
  },
  {
    "id": "Tentación de Maní",
    "name": "Tentación de Maní",
    "desc": "Las tapas suaves tienen una textura delicada y aireada, con un leve toque de vainilla que potencia el resto de los sabores. Son el equilibrio perfecto entre esponjosidad y firmeza.<br><br>El relleno es una combinación exquisita de chocolate blanco, pasta de maní y dulce de leche repostero.<br>El chocolate blanco aporta cremosidad y dulzura, la pasta de maní agrega un sabor tostado y una textura suave, mientras que el dulce de leche une todos los ingredientes con su untuosidad característica.<br><br>Para coronar esta delicia, el alfajor se baña en chocolate semiamargo, logrando un contraste perfecto entre la dulzura del relleno y el amargor del chocolate.<br<br>El resultado es un alfajor intenso y equilibrado, con el contraste ideal entre cremosidad, dulzura y un toque de amargor.<br><br>¡Una tentación absoluta para los amantes del maní y el chocolate!<br><br>Peso neto 75grs.",
    "price": "$2000",
    "category": ['chocolates', 'todos'],
    "new": true,
    "visible": true,
    "link": "https://wa.me/p/27732963276290779/5491120518253"
  },
  {
    "id": "Cacao & Ron",
    "name": "Cacao Intenso + Ron",
    "desc": "El alfajor de cacao y ron es una versión sofisticada y audaz, donde el intenso sabor del cacao se combina con el dulzor del dulce de leche y el toque distintivo del ron, envuelto en una cobertura de chocolate semiamargo.<br><br>Las tapas de cacao tienen una textura suave y húmeda, con un profundo sabor a chocolate que aporta intensidad y carácter.<br><br>El centro del alfajor es una combinación única de dulce de leche con ron, donde la cremosidad y dulzura del dulce de leche se fusionan con las notas aromáticas del ron, aportando un sutil toque especiado y cálido que realza el sabor general.<br><br>Para el toque final, el alfajor se baña en chocolate semiamargo, logrando un contraste perfecto entre la dulzura del relleno y la profundidad del cacao.<br><br>El resultado es un alfajor elegante y con carácter, ideal para quienes buscan un postre con un toque sofisticado y un sabor inigualable.<br><br>¡Una combinación perfecta entre dulzura, intensidad y un sutil dejo alcohólico que lo hace único!<br><br>Peso neto 75grs.",
    "price": "$2000",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/9007280292672901/5491120518253"
  },
  {
    "id": "Nuez",
    "name": "Nuez",
    "desc": "El Alfajor de Nuez es una delicia artesanal que combina texturas y sabores irresistibles.<br>Sus dos tapas suaves y ligeramente crocantes contienen pedacitos de nuez triturada, aportando un toque rústico y un sabor profundo a frutos secos.<br>El relleno de dulce de leche cremoso equilibra la dulzura con su textura sedosa y su intensidad característica. Para coronar esta exquisitez, un baño de chocolate blanco envuelve cada alfajor, aportando una nota dulce y una terminación elegante.<br><br>Ideal para los amantes de los sabores clásicos con un giro gourmet.<br><br>Peso neto 75grs.",
    "price": "$3000",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/8705545032888826/5491120518253"
  },
  {
    "id": "Maicena",
    "name": "Maicena",
    "desc": "Se compone de dos tapas de maicena, que son galletitas ligeras y desmenuzables.<br>Estas tapas tienen una textura aireada y un sabor delicado, con un leve toque de vainilla y ralladura de limón.<br><br>El relleno es una generosa capa de dulce de leche repostero, que aporta cremosidad y un dulzor intenso que contrasta con la suavidad de las tapas.<br><br>Para finalizar, el alfajor se reboza en coco rallado, que se adhiere a los bordes del dulce de leche, aportando un sutil sabor y una textura levemente crocante.<br><br>El resultado es un alfajor que se deshace en la boca, con el equilibrio perfecto entre dulzura, suavidad y un toque exótico del coco.<br>¡Una delicia irresistible!<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['maicena', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3188162611217945/5491120518253"
  },
  {
    "id": "Maicena Bañada Negro",
    "name": "Maicena Bañada Negro",
    "desc": "Las tapas de maicena mantienen su textura suave y aireada, con su característico sabor a vainilla y limón. El relleno sigue siendo una generosa capa de dulce de leche repostero, pero ahora con un extra de intensidad.<br><br>El resultado es un alfajor con una combinación espectacular de texturas y sabores: la suavidad de la maicena, la cremosidad del dulce de leche y el toque semiamargo del baño de  chocolate.<br><br>¡Una versión gourmet del clásico Alfajor de Maicena!<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['maicena', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3522782987738668/5491120518253"
  },
  {
    "id": "Maicena Bañada Blanco",
    "name": "Maicena Bañada Blanco",
    "desc": "Éste alfajor es la combinación perfecta del clásico alfajor de maicena con el agregado especial de un baño de chocolate blanco. Relleno con dulce de leche.<br>Peso neto 75grs.",
    "price": "",
    "category": ['maicena', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/4946660275375824/5491120518253"
  },
  {
    "id": "Avena",
    "name": "Cacao Intenso + Avena",
    "desc": "Alfajor de Avena es una versión rústica y deliciosa del clásico alfajor, con una textura más firme y un sabor más profundo gracias a la combinación de ingredientes.<br><br>Las tapas están hechas con avena triturada, lo que les da una textura ligeramente crocante por fuera pero tierna por dentro.<br>La avena aporta un sabor más intenso y un toque nutritivo, complementado con un leve aroma a vainilla.<br><br>En el centro, el protagonista es el dulce de leche repostero, que le da cremosidad y ese dulzor irresistible que contrasta con la textura de las tapas.<br><br>Para el toque final, el alfajor se baña en chocolate semiamargo, logrando una cobertura crujiente que potencia todos los sabores. El amargor del chocolate equilibra la dulzura del dulce de leche y la base de avena, creando una experiencia intensa y equilibrada en cada bocado.<br><br>El resultado es un alfajor con un juego de texturas perfecto: crocante, cremoso y con el toque justo de dulzura.<br>Ideal para quienes buscan una opción distinta, con más cuerpo y sabor.<br>¡Una versión irresistible del clásico argentino!<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['chocolates', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3174337869283824/5491120518253"
  },
  {
    "id": "Avena Nevada",
    "name": "Avena Nevada",
    "desc": "Alfajor de avena, en éste caso el baño de chocolate no está presente. Dos galletita de avena con cacao, relleno con dulce de leche y coco rayado decorando en su exterior.<br>Peso neto 75grs.",
    "price": "",
    "category": ['avena', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3040309089365303/5491120518253"
  },
  {
    "id": "Avena Frutal",
    "name": "Avena Frutal",
    "desc": "Para los que quieren disfrutar de un alfajor distinto, te presentamos una alternativa sin cobertura de chocolate. Dos galletita de avena con cacao y relleno con dulce de membrillo.<br>Peso neto 75grs.",
    "price": "",
    "category": ['avena', 'frutales', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3584773164969219/5491120518253"
  },
  {
    "id": "Frutos Rojos",
    "name": "Frutos Rojos",
    "desc": "Las tapas de cacao aportan un sabor intenso y profundo, con una textura tierna y ligeramente húmeda que realza el relleno. Su aroma a chocolate combina de manera excepcional con la frescura de los frutos rojos.<br><br>El relleno es un dulce artesanal de frutos rojos, elaborada con arándanos, moras, frutillas y frambuesas.<br>Su sabor equilibrado entre dulzura y acidez aporta una explosión frutal en cada bocado, contrastando con la intensidad del cacao.<br><br>Para completar esta delicia, el alfajor se baña en chocolate semiamargo, creando una cobertura crujiente que potencia los sabores y le da un acabado elegante.<br><br>El resultado es un alfajor sofisticado, con un balance perfecto entre el dulzor del chocolate, la acidez refrescante de los frutos rojos y la intensidad del cacao.<br><br>¡Una opción irresistible para los amantes de los sabores intensos y frutales!<br><br>Peso neto 75grs.",
    "price": "$2500",
    "category": ['frutales', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/5304282312977837/5491120518253"
  },
  {
    "id": "Corazón de Frutos Rojos",
    "name": "Corazón de Frutos Rojos",
    "desc": "Las tapas de cacao tienen un sabor profundo y una textura suave y húmeda, resaltando el carácter chocolatoso del alfajor. Su aroma envolvente combina a la perfección con el relleno.<br><br>En el interior, una capa generosa de dulce de leche aporta cremosidad y dulzura, contrastando con un corazón de frutos rojos artesanal (arándanos, moras, frutillas y frambuesas).<br>Esta combinación crea un juego de sabores único, donde la acidez y frescura de los frutos rojos equilibran la intensidad del dulce de leche.<br>Para completar, el alfajor se baña en chocolate semiamargo, aportando una cobertura crujiente que realza cada uno de los sabores y le da un acabado irresistible.<br>El resultado es una experiencia de sabor sofisticada y equilibrada, con el contraste perfecto entre dulzura, acidez y la intensidad del chocolate.<br>¡Una opción ideal para quienes buscan un alfajor diferente y lleno de matices!<br><br>Peso neto 75grs.",
    "price": "$2500",
    "category": ['frutales', 'todos'],
    "new": true,
    "visible": true,
    "link": "https://wa.me/p/8431388843604552/5491120518253"
  },
  {
    "id": "fr-sin-azucar",
    "name": "Corazón de Frutos Rojos Sin Azúcar",
    "desc": "Disfrutá de un delicioso alfajor sin culpas. Con tapas elaboradas con una combinación de harina de avena, arroz y algarroba, endulzadas naturalmente con stevia, logramos una textura suave y un sabor equilibrado.<br>El relleno es un exquisito dulce de leche repostero con stevia y un corazón de frutos rojos endulzados con stevia, que mantiene toda la cremosidad y dulzura, pero sin azúcar añadida.<br>Está bañado con chocolate al 70% de cacao amargo.<br><br>Ideal para quienes buscan una opción más saludable sin renunciar al placer de un buen alfajor.<br><br>Peso neto 75grs.",
    "price": "$3500",
    "category": ['saludables', 'frutales', 'todos'],
    "new": true,
    "visible": true,
    "link": "https://wa.me/p/24253727537589707/5491120518253"
  },
  {
    "id": "Manzana",
    "name": "Manzana",
    "desc": "Las tapas suaves tienen una textura delicada y esponjosa, con un sutil sabor a vainilla que realza el relleno.<br><br>En el interior, el protagonista es un relleno de manzana elaborado artesanalmente, con un toque justo de dulzor y acidez natural.<br>Su frescura aporta un contraste delicioso y refrescante.<br><br>Para completar, el alfajor se baña con chocolate blanco, que le aporta una dulzura cremosa y un brillo tentador.<br>La combinación con la manzana verde crea un equilibrio perfecto entre frescura y dulzura, resaltando los sabores de cada ingrediente.<br><br>El resultado es un alfajor sofisticado, ligero y con un toque frutal que lo hace diferente.<br><br>¡Ideal para quienes buscan un dulce innovador y elegante!<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['frutales', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3562345450537997/5491120518253"
  },
  {
    "id": "DDL Sin Azúcar",
    "name": "DDL Sin Azúcar",
    "desc": "Disfrutá de un delicioso alfajor sin culpas. Con tapas elaboradas con una combinación de harina de avena, arroz y algarroba, endulzadas naturalmente con stevia, logramos una textura suave y un sabor equilibrado.<br>El relleno es un exquisito dulce de leche repostero con stevia, que mantiene toda la cremosidad y dulzura, pero sin azúcar añadida.<br><br>Ideal para quienes buscan una opción más saludable sin renunciar al placer de un buen alfajor.<br><br>🥇 Medalla de Oro en Mejor Alfajor Saludable Artesanal - Campeonato Argentino del Alfajor Avellaneda 2025<br>🥈 Segundo Mejor Alfajor - Fiesta Provincial del Alfajor Artesanal Rawson 2024<br><br><span class='small'>Ingredientes: Harina de algarroba, harina de avena y harina de arroz, relleno con de dulce de leche con Stevia. Bañado con cobertura de cacao amargo al 70%.<br>Peso neto 75grs.</span>",
    "price": "$3500",
    "category": ['saludables', 'todos'],
    "new": true,
    "visible": true,
    "link": "https://wa.me/p/7712145038887687/5491120518253"
  },
  {
    "id": "Glaseado Membrillo",
    "name": "Glaseado Membrillo",
    "desc": "Un clásico con un toque frutal y equilibrado.<br>Sus tapas de vainilla son tiernas y esponjosas, rellenas con una generosa capa de dulce de membrillo suave y cremoso, que aporta un sabor dulce y ligeramente ácido.<br>Para coronarlo, una delicada capa de glaseado de azúcar, que le da ese toque crujiente y dulce tan característico.<br><br>Ideal para quienes buscan una opción diferente pero igual de deliciosa.<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['glaseado', 'todos'],
    "new": true,
    "visible": false,
    "link": "https://wa.me/p/9268365299955721/5491120518253"
  },
  {
    "id": "Glaseado Dulce de Leche",
    "name": "Glaseado DLL",
    "desc": "Un clásico irresistible con el equilibrio perfecto entre suavidad y dulzura.<br>Sus tapas de vainilla son tiernas y esponjosas, rellenas con una generosa cantidad de dulce de leche repostero, logrando una textura cremosa en cada bocado.<br>Para coronarlo, una delicada capa de glaseado de azúcar, que le da ese toque crujiente y dulce tan característico.<br><br>Ideal para quienes aman los sabores tradicionales con un toque extra de dulzura.<br><br>Peso Neto 75grs.",
    "price": "",
    "category": ['glaseado', 'todos'],
    "new": true,
    "visible": false,
    "link": "https://wa.me/p/23918174027775671/5491120518253"
  },
  {
    "id": "Glaseado Manzana",
    "name": "Glaseado Manzana",
    "desc": "Una combinación suave y equilibrada que deleita el paladar.<br>Sus tapas de vainilla, esponjosas y delicadas, abrazan un corazón de dulce de manzana elaborado artesanalmente, con su sabor natural y un sutil toque frutal. Para finalizar, una fina capa de glaseado de azúcar, que aporta ese clásico crocante y dulzura irresistible.<br><br>Ideal para quienes buscan un alfajor con un giro frutal y delicioso.<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['glaseado', 'todos'],
    "new": true,
    "visible": false,
    "link": "https://wa.me/p/8623903107712533/5491120518253"
  },
  {
    "id": "Glaseado Durazno",
    "name": "Glaseado Durazno",
    "desc": "Una combinación dulce y frutal que sorprende.<br>Sus tapas de vainilla, tiernas y esponjosas, envuelven un relleno suave y generoso de dulce de durazno elaboradoartesanalmente, con su sabor delicado y ligeramente perfumado.<br>Para completar, una capa de glaseado de azúcar, que aporta ese toque crujiente y dulce irresistible.<br><br>Ideal para quienes buscan un alfajor diferente, con un toque frutal y refrescante.<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['glaseado', 'todos'],
    "new": true,
    "visible": false,
    "link": "https://wa.me/p/9418678811555228/5491120518253"
  },
  {
    "id": "Membrillo Negro",
    "name": "Membrillo Negro",
    "desc": "Un delicioso alfajor con tapas suaves que se deshacen en la boca, bañadas en chocolate semiamargo para un equilibrio perfecto entre dulzura e intensidad.<br>En su interior, un generoso relleno de dulce de membrillo, con su sabor frutal y textura justa, que aporta un toque tradicional y exquisito.<br>¡Una combinación irresistible!<br><br>Peso neto 75grs.",
    "price": "$2500",
    "category": ['frutales', 'todos'],
    "new": false,
    "visible": true,
    "link": "https://wa.me/p/5071317579609956/5491120518253"
  },
  {
    "id": "Membrillo Blanco",
    "name": "Membrillo Blanco",
    "desc": "Un alfajor artesanal con tapas suaves, que logran el equilibrio justo entre ternura y textura.<br>Su corazón está relleno de dulce de membrillo, con su sabor frutal y su punto justo de dulzura.<br>Todo esto, envuelto en una cobertura de chocolate blanco, que aporta un toque cremoso y delicado.<br>¡Una combinación irresistible de tradición y dulzura!<br><br>Peso neto 75grs.",
    "price": "",
    "category": ['frutales', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/5307116175973129/5491120518253"
  },
  {
    "id": "Merengue con Dulce de Leche",
    "name": "Merengue con DDL",
    "desc": "2 Galletitas de vainilla rellenas con dulce de leche y con una exquisita cobertura de merengue italiano.<br>Peso 75grs.",
    "price": "",
    "category": ['merengue', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/4661400207319943/5491120518253"
  },
  {
    "id": "Merengue con Membrillo",
    "name": "Merengue con Membrillo",
    "desc": "2 galletitas de vainilla rellenas con dulce de membrillo y con una exquisita cobertura de merengue italiano.<br>Peso 75grs.",
    "price": "",
    "category": ['merengue', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/7920957281255043/5491120518253"
  },
  {
    "id": "Pistacho",
    "name": "Pistacho",
    "desc": "Este alfajor te conquista con un sabor irresistible y diferente a todo lo que probaste. Las tapas, elaboradas con una masa que incorpora trozos de pistacho, ofrecen una textura ligeramente crocante. El corazón de este alfajor es una generosa capa de pasta de pistacho, que aporta una cremosidad intensa y un gusto inconfundible a este fruto seco. Complementando este relleno, el baño de chocolate con blanco añade un toque de dulzura clásica y suavidad, creando un equilibrio perfecto. El resultado es un postre exquisito que deleita a los paladares más exigentes.<br>Peso neto 75grs.",
    "price": "$3500",
    "category": ['pistacho', 'todos'],
    "new": true,
    "visible": true,
    "link": "https://wa.me/p/24726400823632018/5491120518253"
  },
  {
    "id": "Dubai",
    "name": "Dubai",
    "desc": "Este alfajor presenta una experiencia de sabor única y sofisticada, inspirada en los sabores de Medio Oriente. Las tapas, elaboradas con una masa que incorpora trozos de pistacho, ofrecen una textura ligeramente crocante. El corazón de este alfajor es una generosa capa de pasta de pistacho, enriquecida con kadaif tostado y desmenuzado. Esta combinación aporta una cremosidad intensa y el gusto inconfundible del pistacho, con el toque inesperado de una textura crujiente y dorada. Complementando este relleno, un baño de chocolate con leche añade un toque de dulzura clásica y suavidad. El resultado es un postre exquisito que deleita a los paladares más exigentes con una combinación perfecta de lo dulce y lo crujiente, todo en un solo bocado.<br>Peso neto 75grs.",
    "price": "$3500",
    "category": ['pistacho', 'todos'],
    "new": true,
    "visible": false,
    "link": "https://wa.me/p/24043410718684138/5491120518253"
  },
  {
    "id": "Integral",
    "name": "Integral",
    "desc": "100% Integral!!!! Dos galletitas con harina integral y cacao amargo, relleno con dulce de leche bañado con chocolate semiamargo.<br>Peso neto 75grs.",
    "price": "",
    "category": ['integral', 'todos'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/5425917737421250/5491120518253"
  },
  {
    "id": "Caja por 6 alfajores",
    "name": "Caja por 6 alfajores",
    "desc": "Podes elegir los siguientes sabores:<br>Chocolate Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral.<br><br>Opcional: Chocolate Intenso y Frutos Rojos adicional por unidad.",
    "price": "",
    "category": ['cajas'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3049398341773716/5491120518253"
  },
  {
    "id": "Caja por 12 alfajores",
    "name": "Caja por 12 alfajores",
    "desc": "Podes elegir los siguientes sabores:<br>Chocolate Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral.<br><br>Opcional: Chocolate Intenso y Frutos Rojos adicional por unidad.",
    "price": "",
    "category": ['cajas'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/3306268116107321/5491120518253"
  },
  {
    "id": "Mini Alfajores",
    "name": "Mini Alfajores",
    "desc": "Tenes una fiesta, cumple, comunión o un evento especial donde queres agasajar a tus invitados??? Nosotros tenemos una buena opción para tú mesa dulce!!!!! Te presentamos nuestros exquisitos mini alfajores: Maicena, Chocolate Suave y Chocolate Blanco. Podes elegir la combinación que más te guste!!!<br><br>Presentación en caja de 12 unidades.",
    "price": "",
    "category": ['cajas'],
    "new": false,
    "visible": false,
    "link": "https://wa.me/p/4590362054365924/5491120518253"
  }
]