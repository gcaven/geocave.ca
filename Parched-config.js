module.exports = {
  gulp: require('gulp'),
  webapp: {
    files: {
      order: {
        before: [
          /jquery\.js/,
          /jquery-ui\.js/
        ]
      }
    },

    bundles: {
      app: {
        dest: 'public'
      },
    },

    browserSyncOptions: {
      files:"../admin/**/*.html",
      socket:{
        domain:"localhost:3000"
      }
    }
  },

  plugins: {
    order: {
      after: [
        'parched-imagemin',
      ],
    },

    'parched-babel': {
      stage: 0,
    },

    'parched-svg2png': {
      outputCSS: 'styles/_sprites.sass',
      usePlaceholderSelectors: false,
    },

    'parched-webfont': {
      outputCSS: 'styles/_glyphs.sass',
      usePlaceholderSelectors: false,
    },

    'parched-sass': {
      indentedSyntax: true,
    }
  }
};
