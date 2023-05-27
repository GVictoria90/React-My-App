//Ejercicio 1: Exporta el componente
//• Este ejemplo interactivo no funciona porque el componente raíz no está exportado: (Intenta arreglarlo)

function Profile() {
    return(
        <div>
            <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/3/32/Portrait-aklilu-lemma-11.jpg" 
                alt = "Aklilu Lemma" 
            />
            <h4>Aklilu Lemma</h4>
        </div>
    );
}

export default Profile;