//all gets requests, main user interaction getting all the info from user front end
//pushes it to the views
//get the find all agents and display them based on what the user is inputting
//push it to place holder view

const router = require('express').Router();
const { Agents, User } = require('../models');
const withAuth = require('../utils/auth');



// Opening Access Page
router.get('/', async (req, res) => {
  res.render('opening');
})


// Login Page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to home
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }
  res.render('login');
});


// Register Page
router.get('/register', (req, res) => {
  res.render('register');
});


// Home Page - Shows agents only created by logged in user

router.get('/home', async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Agents }],
    });


    const user = userData.get({ plain: true });

    console.log(user);

    res.render('home', {
      user,
      loggedIn: req.session.loggedIn,
    });


  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
})

// Home Page OLD
// router.get('/home', async (req, res) => {
//   try {
//     // Get all agents info and JOIN with user data
//     const agentsData = await Agents.findAll({
//       include: [
//         { model: User }
//       ],
//     });

//     // Serialize data so the template can read it, this is getting allll the agents data
//     const agents = agentsData.map((agents) => agents.get({ plain: true }));

//     // Pass serialized data and session flag into template and putting into a dashboard view file
//     res.render('home', {
//       agents,
//       // logged_in: req.session.logged_in 
//     });

//     console.log(agents);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// View Specific Agents
router.get('/agents/:id', async (req, res) => {//router.get is 
  try {
    const agentData = await Agents.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },],
    });
    console.log(agentData);
    const agent = agentData.get({ plain: true });;// this is for the specific agent
    console.log(agent);
    //console.log(req.session.user_id);
    res.render('agent', { //this is rendering whatever view we want it to, just calling it agent for now, it is for specific agents
      //spread operator, take post out of the array, spread just takes the info out, destructuring takes specific things out
      ...agent,//is this referring to the const agent above or agents model name or what
      logged_in: req.session.logged_in,
      logged_in_user: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// View User/Admin Profile
// Use withAuth middleware to prevent access to route
router.get('/user', withAuth, async (req, res) => {//getting user model name
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Agents }],//do we need to include this right here?
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Signup Page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');//again, not sure if this is a good place to redirect user if they are already logged in
    return;
  }
  res.render('signup');//then this will render the signup views page if they are not logged in
});

// Logout Page not too sure this is the best way to handle logging out but hey
router.get('/logout', (req, res) => {
  console.log("Logging Out");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  } else {
    res.status(204).redirect("/");
  }
});

module.exports = router;

