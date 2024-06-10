module.exports = {
    exportPathMap: async function () {
      const paths = {
        '/': { page: '/' },
      };
      // Füge alle Seiten in deinem Projekt hinzu
      // Beispiel: paths['/about'] = { page: '/about' };
      // paths['/contact'] = { page: '/contact' };
      return paths;
    },
  };
  