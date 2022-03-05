const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.json({ 
      author: 'Mark',
      content: 'Why would I resort to trickery, you\'re already a prisoner'
   })
});

module.exports = router;