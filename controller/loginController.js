const {User} = require ('../models/user')

exports.getLoginControll = async (req, res) => {
    try {
        res.status(200).json({
            
        })
    
    } catch (error) {
        return res.status(500).json({
            status: "Server error",
            error: "Server down"
        })
    }
}
