/* eslint-disable no-unused-expressions */

import { Metadata } from "next";

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const { productId } = params;
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			return resolve(productId), 100;
		});
	});
	return {
		title: `Product ${title}`,
	};
};

type Props = {
	params: {
		productId: string;
	};
};

export default function ProductDetails({
	params,
}: {
	params: { productId: string };
}) {
	return <h1>Details about product {params.productId}</h1>;
}
