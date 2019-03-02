const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const joi = require('joi')


//Database connection

const Member = require('../../models/Member')


router.delete('/:id',(req,res) => {
    const memberId = req.params.id
    const deletedMember = Member.find(deletedMember => Member.id == memberId)
    if ( deletedMember === undefined)
    {
        res.send('this id is not correct')
    }
        
    else{
        const index = Member.indexOf(deletedMember)
        Member.splice(index,1)
        res.send(Member)
    }
})