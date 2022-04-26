const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Private', 'Public'],
        default: 'Public',
    },
    movies: [ 
        { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },  ],
});

const Playlist = mongoose.models.Playlist || mongoose.model("Playlist", PlaylistSchema);

export default Playlist;