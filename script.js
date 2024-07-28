{
    document.getElementById('songForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let newSong = document.getElementById('newSong').value;
        if (newSong.trim() !== "") {
            addSongToList(newSong);
            document.getElementById('newSong').value = "";
        }
    });

    function addSongToList(song) {
        let li = document.createElement('li');
        li.textContent = song;

        // Botón para borrar
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        //Para marcar como escuchada
        li.addEventListener('click', function() {
            li.classList.toggle('escuchada');
        });

        li.appendChild(deleteBtn);
        document.getElementById('songList').appendChild(li);
    }
};









