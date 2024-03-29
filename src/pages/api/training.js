import createTraining from "../../../server/mongodb/actions/create/createTraining";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            await createTraining(req.body);
            return res.status(200).send("Success");
        } catch (e) {
            if (e.name === "ValidationError") {
                return res.status(400).send(e.message);
            }
            return res.status(500).send(e.message);
        }
    }
}