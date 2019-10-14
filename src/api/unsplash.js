import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization:
			"Client-ID 021c2e5b371dd2b96371eeed7844531534e30dbe09f7fefd92c1ab27af886e49"
	}
});
