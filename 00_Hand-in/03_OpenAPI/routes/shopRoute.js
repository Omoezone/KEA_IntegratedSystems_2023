import { Router } from "express";

const router = Router();

const shops = [{
    id: 1,
    shopName: "Lidl"
}];

/**
 * @openapi
 * /api/shops:
 *   get:
 *     description: Get all shops
 *     responses:
 *       200:
 *         description: Returns all shops
 */
router.get("/api/shops", (req, res) => {
    res.send({data: shops})
});

/**
 * @openapi
 * /api/shops:
 *   post:
 *     description: Create a new shop
 *     responses:
 *       200:
 *         description: Returns the shop that was created
 */
router.post("/api/users", (req, res) => {
    const shop = req.body;
    shops.push(shop);
    res.send({ data: shop });
});

export default router;