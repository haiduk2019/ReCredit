import  './sass/style.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./js', true, /\.js$/));
importAll(require.context('./img', true, /\.(jpe?g|png|gif|svg|webp|webmanifest|ico|xml)$/));
