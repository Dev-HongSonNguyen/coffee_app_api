import sliderModel from "../models/sliderModel.js";
import validateSlider from "../schemas/sliderValidate.js";
import sliderValidate from "../schemas/sliderValidate.js";

export const getAllSlider = async (req, res) => {
    try {
        const slider = await sliderModel.find()
        if (!slider) {
          return res.status(404).json({
            message: "Lấy tài nguyên thất bại !",
          });
        }
        return res.json({
          message: "Lấy tài nguyên thành công !",
          slider,
        });
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
};

export const getOneSlider = async(req, res) => {
    try {
        const slider = await sliderModel.findById(req.params.id)
        if(!slider){
            return res.json({
                message: "Lấy tài nguyên thất bại !",
            })
        }
        return res.json({
            message: "Lấy tài nguyên thành công !",
            slider,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const createSlider = async (req, res) => {
    try {
        // console.log('Body request: ', req.body); 
      const { error } = sliderValidate.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const slider = await sliderModel.create(req.body);
    //   console.log('New slider: ', slider);
      if (!slider) {
        return res.json({
          message: "Thêm tài nguyên không thành công !",
        });
      }
      return res.json({
        message: "Thêm tài nguyên thành công !",
        slider,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
};
export const updateSlider = async(req, res) => {
    try {
        const { error } = validateSlider.validate(req.body);
    if (error) {
      return res.status(400).json({
        massage: error.details[0].message,
      })
    }
    const slider = await sliderModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (!slider) {
      return res.json({
        message: "Cập nhật tài nguyên không thành công !"
      })
    }
    return res.json({
      message: "Cập nhật tài nguyên thành công !",
      slider,
    })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
};
export const deleteSlider = async(req, res) => {
    try {
        const slider = await sliderModel.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa tài nguyên thành công !",
            slider,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}