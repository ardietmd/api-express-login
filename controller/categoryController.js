const { Category} = require('../models')

exports.getAllCategories = async (req, res) => {
   try {
    const getAllCategories = await Category.findAll();
    return res.status(200).json({
        status: "Success",
        data: getAllCategories
    })
   } catch (error) {
    return res.status(500).json({
        status: "Server error",
        error: "Server down"
    })
   }
}

exports.getByIdCategory = async (req, res) => {
    try {
        const getId = req.params.id
        const idCategory = await Category.findByPk(getId);

        if (!idCategory) {
            return res.status(404).json({
                status: "fail",
                error: "Id tidak ada"
            })
        }

        return res.status(200).json({
            status: "success",
            data: idCategory
        })
    } catch (error) {
        return res.status(500).json({
            status: "Server error",
            error: "Server down"
        })
        
    }
}

exports.storeCategory = async (req, res) => {
    // let name = req.body.name;
    // let description = req.body.description;

    try {
        let {name, description} = req.body
        const newCategory = await Category.create(
            {
                name: name,
                description: description
            }
        )
        res.status(200).json({
            status: "success",
            data: newCategory
        })

    } catch (error) {
        return res.status(400).json({
            status: "fail",
            error: error.errors
        })
        
    }
}

exports.updateCategory = async (req, res) => {
    try {

        const id = req.params.id;
        await Category.update(req.body, {
              where: {
                id: id
              },
            },
          );
        const newCategory = await Category.findByPk(id);
        if (!newCategory) {
            return res.status(404).json({
                status: "fail",
                error: "Id tidak ada"
            })
        }

        return res.status(200).json({
            status: "success",
            data: newCategory
        })

    } catch (error) {
        return res.status(500).json({
            status: "fail",
            error: "Server down"
        })
    }
}

exports.destroyCategory = async (req, res) => {

    try {
        const id = req.params.id
        const idCategory = await Category.findByPk(id)
        if (!idCategory) {
            return res.status(404).json({
                status: "fail",
                error: "Id tidak ada"
            })
        }
    
        await Category.destroy({
            where: {
              id
            },
          });
    
        return res.status(200).json({
            status: "success",
            message: `Data dengan ${id} berhasil dihapus`
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            error: "Server down"
        })
    }

}