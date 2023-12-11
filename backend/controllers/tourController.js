const dbExecute = require("../config/db");
const newTourValidation = require('../request/newTourRequest')

async function newTour(req, res) {
  try {
    const data = await dbExecute(
      "SELECT id, name FROM facilities WHERE is_deleted = FALSE"
    );
    res.json({
      message: "success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function saveTour(req, res){
    try {
        // save temp data
      const tourData = {
        title: req.title,
        slug: req.slug,
        categories: req.categories,
        price: req.price,
        address: req.address,
        address_link: req.address_link,
        description: req.description,
        ticket_operasional: req,
        ticket_operasional,
        facilities: req.facilities,
      };

      //   Validate data
      newTourValidation(tourData);

      // upload files
      await handleImageUpload("images", 5)(req, res);

      // Ensure that req.facilities is an array
      const facilities = Array.isArray(req.facilities)
        ? req.facilities
        : [req.facilities];

      // Save tour data to the 'tours' table
      const tourInsertResult = await dbExecute(
        `INSERT INTO tours (title, slug, categories, price, address, address_link, description, ticket_operasional, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          tourData.title,
          tourData.slug,
          tourData.categories,
          tourData.price,
          tourData.address,
          tourData.address_link,
          tourData.description,
          tourData.ticket_operasional,
          new Date(),
        ]
      );
      
      // Get ID new inserted tour
      const tourId = tourInsertResult.insertId; 

      // Iterate over facilities and save each one to tour_has_facilities table
      for (const facility of facilities) {
        await dbExecute(
          `INSERT INTO tour_has_facilities (tour_id, facility_id, created_at) VALUES (?, ?, ?)`,
          [tourId, facility, new Date()]
        );
      }

      // Iterate over req.image_path and save each path to the 'tour_images' table
      for (const imgPath of req.image_path) {
        await dbExecute(
          `INSERT INTO tour_images (id_uuid, tour_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
          [uuidv4(), tourId, imgPath, new Date()]
        );
      }

      res
        .status(201)
        .json({ message: "Tour, facilities, and images saved successfully!" });
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json({message: "Internal Server Error!"})
    }
    
    }

    
    

async function indexTour() {

}

async function detailTour() {

}

async function editTour() {

}

async function deleteTour() {

}

module.exports = {
  newTour,
  saveTour,
  indexTour,
  detailTour,
  editTour,
  deleteTour,
};