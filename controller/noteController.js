const Note = require("../models/note")
// console.log(Note);
const catchAsync = require("../utils/catchAsync");

exports.getAllNote = catchAsync(async (req, res) => {

    // try {
        const notes = await Note.find();
        res.status(200).json(
            {
                status: 1,
                message: "Note Found",
                result: notes
            }
        )
        
    // } catch (error) {
    //     res.status(500).json({
    //         status: 0,
    //         message: "Failed",
    //         result: error.message
    //     })
    // }
   


});
   

exports.createNote = catchAsync(async (req, res) => {
    // console.log(req.body);
    
    // try {
        const newNote = await Note.create(req.body);
        res.status(201).json({
            status: 1,
            message: "new Note created...",
            result: newNote
        })
    // } catch (err) {
    //     res.status(400).json({
    //         status: 0,
    //         message: "Failed",
    //         result: err.message
    //     })
    //     // console.log(err)
    // }
});
exports.getNote = catchAsync(async (req, res) => {
    // try {
        const note = await Note.findById(req.params.id);
        res.status(200).json({
            status: 1,
            message: "Updated Successfully",
            result: note
        });
    // } catch (error) {
    //     res.status(400).json({
    //         status: 0,
    //         message: "Failed",
    //         result: err.message
    //     });
    // }
    
});

exports.updateNote = catchAsync(async (req, res) => {
    // try {
        const newNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
        res.status(200).json({
            status: 1,
            message: "Updated Successfully",
            result: newNote
        });
    
    // } catch (error) {
    //     res.status(400).json({
    //         status: 0,
    //         message: "Failed",
    //         result: err.message
    //     });
    // }
    
});
exports.deleteNote = catchAsync(async (req, res) => {
    // try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 1,
            message: "Note deleted"
        })
    // } catch (error) {
        
    //     res.status(404).json({
    //         status: 0,
    //         message: "Fail",
    //         result: error.message
            
    //     })
    // }
    
    
});