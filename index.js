const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
const personajes=[
    {id:1,nombre:'Kagaya Ubuyashiki',alías:'Oyakata-sama',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:23, genero:'Masculino',especie:'Humano', ocupacion:'Lider del cuerpo de exterminio de demonios',estilocombate:''},
    {id:2,nombre:'Hinaki Ubuyashiki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:8, genero:'Masculino',especie:'Humano', ocupacion:'',estilocombate:''},
    {id:3,nombre:'Kiriya Ubuyashiki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Ubuyashiki', edad:8, genero:'Masculino',especie:'Humano', ocupacion:'Lider de la familia Ubuyashiki',estilocombate:''},
    {id:4,nombre:'Giyu Tomioka',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tomioka', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar Agua',estilocombate:'Respiración del Agua',grupo:'Pilar'},
    {id:5,nombre:'Mitsuri Kanroji',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kanroji', edad:19, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar Amor',estilocombate:'Respiración del Amor', grupo:'Pilar'},
    {id:6,nombre:'Obanai Iguro',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Iguro', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar Serpiente',estilocombate:'Respiración de Serpiente', grupo:'Pilar'},
    {id:7,nombre:'Sanemi Shinazugawa',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Shinazugawa', edad:21, genero:'Masculino',especie:'Humano', ocupacion:'Cazadora de Demonios / Pilar del Viento',estilocombate:'Respiracion de Viento', grupo:'Pilar'},
    {id:8,nombre:'Gyomei Himejima',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Himejima', edad:27, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Roca',estilocombate:'Respiracion de la roca', grupo:'Pilar'},
    {id:9,nombre:'Tengen Uzui',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Uzui', edad:23, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Roca',estilocombate:'Respiracion del sonido', grupo:'Pilar'},
    {id:10,nombre:'Muichiro Tokito',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tokito', edad:14, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Niebla',estilocombate:'Respiracion de la niebla', grupo:'Pilar'},
    {id:11,nombre:'Shinobu Kocho',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kochō', edad:18, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar Insecto / Farmaceutica',estilocombate:'Respiración de los Insectos', grupo:'Pilar'},
    {id:12,nombre:'Kyojuro Rengoku',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Rengoku', edad:20, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar del Fuego',estilocombate:'Respiración de Fuego', grupo:'Ex Pilar'}, 
    {id:13,nombre:'Kanae Kocho',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kochō', edad:17, genero:'Femenino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar de la Flor',estilocombate:'Respiración de la Flor', grupo:'Ex Pilar'},
    {id:14,nombre:'Sakonji Urokodaki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Urokodaki', edad:'Desconocido', genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios Retirado',estilocombate:'', grupo:'Ex Pilar'},
    {id:15,nombre:'Jigoro Kuwajima',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kuwajima', edad:60, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios / Pilar del Rayo',estilocombate:'Respiración del Rayo', grupo:'Ex Pilar'},
    {id:16,nombre:'Kanao Tsuyuri',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Tsuyuri', edad:16, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios',estilocombate:'', grupo:'Cazadores de Demonios'},
    {id:17,nombre:'Tanjiro Kamado',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Kamado', edad:15, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios'},
    {id:18,nombre:'Zenitsu Agatsuma',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Agatsuma', edad:16, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración del Rayo', grupo:'Cazadores de Demonios'},
    {id:19,nombre:'Inosuke Hashibira',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Hashibira', edad:15, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración de la Bestia', grupo:'Cazadores de Demonios'},
    {id:20,nombre:'Genya Shinazugawa',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'Shinazugawa', edad:16, genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios'},
    {id:21,nombre:'Murata',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'', edad:'Desconocido', genero:'Masculino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'Respiración del Agua', grupo:'Cazadores de Demonios'},
    {id:22,nombre:'Ozaki',alías:'',afiliacion:'Cuerpo de Exterminio de Demonios', familia:'', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'Cazador de Demonios',estilocombate:'', grupo:'Cazadores de Demonios'},
    {id:23,nombre:'Aoi Kanzaki',alías:'',afiliacion: 'Cuerpo de Exterminio de Demonios, Mansión de las mariposas', familia:'Kanzaki', edad:16, genero:'Femenino',especie:'Humano', ocupacion:'Cazadora de Demonios',estilocombate: 'Respiración del agua', grupo:''},
    {id:24,nombre:'Sumi Nakahara',alías:'',afiliacion: 'Mansión de las mariposas', familia: 'Nkahara', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate:'', grupo:''},
    {id:25,nombre:'Kiyo Terauchi',alías:'',afiliacion: 'Mansión de las mariposas', familia:'Kiyo', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate: '', grupo:''},
    {id:26,nombre:'Naho Takada',alías:'',afiliacion: 'Mansión de las mariposas', familia:'Takada', edad:'Desconocido', genero:'Femenino',especie:'Humano', ocupacion:'',estilocombate:'' , grupo:''},
    {id:27,nombre:'Goto',alías:'',afiliacion: 'Cuerpo de Exterminio de Demonios', familia:'Kanzaki', edad:23, genero:'Femenino',especie:'Humano', ocupacion:'kakushi',estilocombate: '', grupo:''},
    {id:28,nombre:'Muzan Kibutsuji',alías:'',afiliacion:'Doce lunas demoníacas', familia:'Kibutsuji', edad:'1000 aproximadamente', genero:'Masculino',especie:'Demonio', ocupacion:'Hombre de negocios(bajo su disfraz humano)',estilocombate:'', grupo:'Demonios'},
    {id:29,nombre:'Nezuko Kamado',alías:'',afiliacion:'Tanjiro Kamado | Cuerpo de Exterminio de Demonios', familia:'Kamado', edad:'14 años(Dejo de envejecer al ser convertida en Demonio)', genero:'Femenino',especie:'Humana(actualmente) Demonio(antes)', ocupacion:'',estilocombate:'', grupo:'Demonios'}
];
app.get('/',(req,res)=>{
    res.send('Demon Slayer api');
});
app.get('/api/personajes',(req,res)=>{
    res.send(personajes);
});
app.get('/api/personajes/:id',(req,res)=>{
    const personaje=personajes.find(c=>c.id===parseInt(req.params.id));
    if(!personaje) return res.status(404).send(`Personaje no encontrado`);
    else res.send(personaje);
});

app.post('/api/personajes/',(req,res)=>{
    const personaje={
        id:personajes.length+1,
        nombre:req.body.nombre,
        ocupacion:req.body.ocupacion
    };
    personajes.push(personaje);
    res.send(personaje);
});

app.delete('/api/personajes/:id',(req,res)=>{
    const personaje=personajes.find(c=>c.id===parseInt(req.params.id));
    if(!personaje) return res.status(404).send(`Personaje no encontrado`);

    const index=personajes.indexOf(personaje);
    personajes.splice(index,1);
    res.send(personaje);
});


const port = process.env.port || 8080;
app.listen(port,()=>console.log(`Escuchando en el puerto ${port}...`));