module.exports = {
  content: [
    '/Users/zaycho/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.10.0/app/views/**/*.*',
'/Users/zaycho/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.10.0/app/components/**/*.*',
'/Users/zaycho/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.10.0/app/helpers/**/*.*',
'/Users/zaycho/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.10.0/app/assets/javascripts/**/*.js',
'/Users/zaycho/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/spina-2.10.0/app/**/application.tailwind.css'
  ],  
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
