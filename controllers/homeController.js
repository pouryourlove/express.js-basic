const homeController = (req, res) => {
    
    const data = {
        name: "Yuuka",
        userId: 2,
    }
    res.render("index", data);
}

export {homeController}