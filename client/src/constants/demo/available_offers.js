// const available_offers is an object with keys = category type of the offer and value = an array of all the offers of that category.

// const terms_and_conditions is an object with keys = category type of the offer and value = an array of terms and conditions corresponding to the offer in available_offers


export const available_offers = [
    {
        'No Cost EMIs': [
            "No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999"
        ]
    },

    {
        'Bank Offers': [
            'Up to ₹1000 off on HDFC Bank Credit Card EMI Transactions',
            '10% off up to ₹1,500 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above',
            '10% off up to ₹1,500 on Federal Bank Credit Card Transactions, on orders of ₹5,000 and above',]
    },

    {
        'Membership Offers': [
            'Get 150 off on Nexus Prime membership on boAt products above INR 999',
        ]
    }
]



export const terms_and_conditions = [
    {
        'No Cost EMIs': [
            {
                "Info": "Please refer BFL’s Master Terms and Conditions on https://cms-assets.bajajfinserv.in/is/content/bajajfinance/master-tncs-applicable-for-cd-loans-and-emi-cardpdf-2?scl=1&fmt=pdf and https://www.bajajfinserv.in/all-fees-and-charges#en for BFL’s Schedule of Fees and Charges",
                "Terms and Conditions of EMI": [
                    "The following terms & conditions apply to any transactions made using EMI as a payment option on Nexus",
                    "Nexus Seller Services Private Limited (\"ASSPL\") facilitates Equated Monthly Installments (\"EMI\") payment method on all purchases worth: (a) Rs. 3,000 and above made on Nexus or the mobile application/ mobile site thereof using eligible credit cards; (b) Rs. 8000 and above on Nexus made using eligible debit cards of ICICI, Axis and SBI banks and (c) Rs.5000 and above on Nexus made using eligible debit cards of HDFC and Axis.",
                    "Customers can combine items from multiple sellers into a single purchase on Nexus and convert the purchase into an EMI.",
                    "The EMI facility is not available on purchases made using Net Banking or Pay on Delivery payment methods.",
                    "The EMI facility is being offered by the respective banks to the customer and ASSPL has no role to play in the approval, extension, pricing, modification, pre-closure, closure or any matter incidental thereto pertaining to offering of the EMI facility, which is decided at the sole discretion of the bank.",
                    "The EMI facility being offered by the banks to the customers is governed by the respective terms and conditions of each bank/issuer and the customer is advised to approach the bank/issuer in case of any complaint, dispute or enquiry about an EMI transaction.",
                    "Statutory taxes (GST, Education cess and any other taxes) will be levied by the banks on the charges levied by them for the EMI facility as mandated by applicable laws and regulations.",
                    "ASSPL reserves the right to stop facilitating this service on Nexus without any prior notice.",
                    "ASSPL on a best effort basis displays representative EMI related information (EMI amount, Interest rate charged, Total amount payable) for the customer's purchase on Nexus as per the information shared with it by the respective banks on an \"AS IS\" basis. Banks/issuers are the authoritative source of this information and customers are advised to directly contact their bank/issuer for any further clarifications in this regard. For more information, we request you to review the terms and conditions of the respective banks offering such EMI facility.",
                    "ASSPL does not charge the customer any processing or convenience fee for the purpose of facilitating the EMI facility for its customers.",
                    "In the case of customer cancellations or return of items purchased on EMI, ASSPL will facilitate the refunds for and on behalf of the sellers as per the relevant refund policy. The customer is advised to check with the respective bank/issuer offering the EMI how the cancellations or refund will affect the EMI terms and of any pre-closure or interest charges levied on the customer.",
                    "For HDFC bank credit card and debit card EMI for the first EMI, the interest will be calculated from the purchase date till the payment due date. Further the bank charges a processing fee of Rs. 199+GST, for every EMI or No cost EMI transaction which will be billed in the first repayment instalment.",
                    "For every ICICI bank debit card EMI or No cost EMI transaction, ICICI bank charges a processing fee of Rs. 99+GST, which will be billed in the first repayment instalment.",
                    "For every Kotak Mahindra debit card EMI or No cost EMI transaction, bank charges a processing fee of Rs 199+GST which will be billed in the first repayment instalment.",
                    "For every Kotak Mahindra Credit card EMI or No cost EMI transaction, bank charges a processing fee of Rs 249+GST which will be billed in the first repayment installment.",
                    "For every Axis debit card EMI or No cost EMI transaction, bank charges a processing fee of Rs (Max (1% of transaction amount, Rs.99)+GST) which will be billed in the first repayment instalment.",
                    "ASSPL shall not be held liable for any dispute arising out of or in connection with such EMI facility being offered by the respective banks/issuer including but not limited to the authenticity and/or accuracy of any EMI information supplied by the banks to ASSPL for displaying on Nexus.",
                    "EMI is not available for Exports/International customers."
                ],
                "Terms and Conditions of Credit Card No Cost EMI": [
                    "The following terms and conditions apply to no cost equated monthly installment (\"EMI\") transactions made using an eligible credit card issued by any bank and using EMI facility as a payment option (\"No Cost EMI\").",
                    "The No Cost EMI facility is being offered to the customers who make a purchase transaction on Nexus or the mobile application/ mobile site thereof using an eligible credit card issued by any bank using EMI facility; if available on Nexus.",
                    "The No Cost EMI facility is funded by participating sellers and brands (as the case may be) and is made available on select products, as determined from time to time by such sellers and/or brands.",
                    "The No Cost EMI payment option can be availed using the credit card of any bank on Nexus and is not available on purchases made using net banking or pay on delivery payment methods.",
                    "Using the No Cost EMI payment option, the customers who undertake the purchase transactions on Nexus, will only pay amounts such that the total of these amounts during the EMI tenure is equal to the list price of the products as displayed on Nexus (at the time of making the purchase transactions). The participating sellers or brands (as the case may be) will provide amounts equivalent to the interest imposed by the banks to undertake the purchase transactions on EMI.",
                    "The banks issuing the credit cards reserve the right to charge Goods and Services Tax (GST) or other applicable taxes on the purchase transactions undertaken on EMI which will be over and above the product price.",
                    "Customers can add more than one item to their cart and if all the products are eligible for No Cost EMI, such customer will receive No Cost EMI payment option on all items. No Cost EMI discount will be calculated only on the eligible items in the cart.",
                    "Customers may avail the No Cost EMI facility, provided that: the order is not cancelled by the customer or the participating sellers or Nexus; or the product is not returned / exchanged by the customer.",
                    "For ICICI bank credit card EMI for the first EMI, the interest will be calculated from the purchase date till the payment due date. Further the bank charges a processing fee of Rs. 199 + GST, for every EMI or No cost EMI transaction which will be billed in the first repayment instalment.",
                    "For SBI bank credit card EMI for the first EMI transaction, the interest will be calculated from the purchase date till the payment due date. Further the bank charges a processing fee of Rs. 99 + taxes applicable on 6, 9 & 12 month EMIs for transactions greater than or equal to Rs. 16000, Rs. 11000 & Rs. 8500 respectively and a processing fee of Rs. 199 + taxes applicable on 18 & 24 month EMIs for transactions greater than or equal to Rs. 17500 & Rs. 16000 respectively. Processing fee will be billed in the first repayment installment.",
                    "The EMI facility is made available to the customers by and in the sole discretion of the banks issuing the credit cards. Nexus will not be liable for any claims on account of availability or non-availability of EMI facility.",
                    "Nexus reserves the right to stop No Cost EMI payment option at any time without prior notice and without any liability."
                ],
                "Terms and Conditions of Debit Card No Cost EMI": [
                    "The following terms and conditions apply to no cost equated monthly installment (\"EMI\") transactions made using an eligible debit card issued by any bank providing an EMI facility to its debit card holders and using EMI facility as a payment option (\"No Cost EMI\").",
                    "The No Cost EMI facility is being offered to the customers who make a purchase transaction on Nexus or the mobile application/ mobile site thereof using a debit card issued by any bank, providing an EMI facility to its debit card holders, using such EMI facility; if available on Nexus.",
                    "The No Cost EMI facility is funded by participating sellers and brands (as the case may be) and is made available on select products, as determined from time to time by such sellers and/or brands.",
                    "The No Cost EMI payment option can be availed using the debit card of any bank (providing an EMI facility to its debit card holders) on Nexus and is not available on purchases made using net banking or cash on delivery payment methods.",
                    "Using the No Cost EMI payment option, the customers who undertake the purchase transactions on Nexus, will only pay amounts such that the total of these amounts during the EMI tenure is equal to the list price of the products as displayed on Nexus (at the time of making the purchase transactions). The participating sellers or brands (as the case may be) will provide amounts equivalent to the interest imposed by the banks to undertake the purchase transactions on EMI.",
                    "The banks issuing the debit cards reserve the right to charge Goods and Services Tax (GST) or other applicable taxes on the purchase transactions undertaken on EMI which will be over and above the product price.",
                    "For every ICICI bank debit card No Cost EMI transaction, ICICI bank charges a processing fee of Rs. 99, which will be billed in the first repayment installment.",
                    "Customers may avail the No Cost EMI facility, provided that: the order is not cancelled by the customer or the participating sellers or Nexus; or the product is not returned/exchanged by the customer.",
                    "For SBI debit card EMI for the first EMI transaction, the interest will be calculated from the purchase date till the payment due date. Further, the bank charges a processing fee of Rs. 99 + taxes applicable on 6, 9 & 12 month EMIs for transactions greater than or equal to Rs. 16000, Rs. 11000 & Rs. 8500 respectively and a processing fee of Rs. 199 + taxes applicable on 18 & 24 month EMIs for transactions greater than or equal to Rs. 17500 & Rs. 16000 respectively. Processing fee will be billed in the first repayment installment.",
                    "The EMI facility is made available to the customers by and in the sole discretion of the banks issuing the debit cards. Nexus will not be liable for any claims on account of availability or non-availability of EMI facility.",
                    "Nexus reserves the right to stop No Cost EMI payment option at any time without prior notice and without any liability."
                ]
            }
        ]
    },


    {
        'Bank Offers': [
            {
                "Offer": "Instant Discount of up to INR 4,750 on HDFC Bank Credit Card EMI, Debit Card EMI and No Swipe EMI transactions on purchase of select products. The offers will apply on purchase of select products only. Please check if the offer is listed on the product page, before making the purchase.",

                "Offer Benefits": {
                    "Maximum Offer Savings": {
                        "Credit Card EMI": "INR 4,250",
                        "Debit Card EMI": "INR 4,250",
                        "No Swipe EMI Facility": "INR 4,250"
                    },
                    "Applicable EMI Tenure": "6 months & above",
                    "Base Offer Details": {
                        "Min Transaction Value": "INR 7,500",
                        "Max Discount": {
                            "6 & 9 months tenure": "INR 500",
                            "12 months tenure": "INR 750",
                            "18 & 24 months tenure": "INR 1,000"
                        },
                        "Maximum Base Offer Discount": {
                            "Credit/Debit Card EMI & No Swipe EMI": "INR 1,000"
                        }
                    },
                    "Bonus Offer Details": {
                        "Bonus Offer 1": {
                            "Min Transaction Value": "INR 15,000",
                            "Max Discount on EMI Txns": "Additional INR 750 off"
                        },
                        "Bonus Offer 2": {
                            "Min Transaction Value": "INR 30,000",
                            "Max Discount on EMI Txns": "Additional INR 500 off"
                        },
                        "Bonus Offer 3": {
                            "Min Transaction Value": "INR 50,000",
                            "Max Discount on EMI Txns": "Additional INR 2,000 off"
                        },
                        "Maximum Bonus Offer Discount": {
                            "Credit/Debit Card EMI & No Swipe EMI Txns": "INR 3,250"
                        }
                    }
                },
                "Eligibility Conditions": {
                    "Returns": "In the event the customer returns any/all products in the order placed during the offer period, thereby not maintaining the minimum purchase value, as required to avail the Offer, he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned product(s).",
                    "Cancellation": "If an order is cancelled, the offer may take up to 24 hours to refresh for the customer to utilise it again."
                },
                "Application Limits": {
                    "Base Offer": "No limit on the number of transactions to avail the Base Offer discounts.",
                    "Bonus Offer": "Bonus offer discount can be availed only once per Card and No Swipe on EMI transactions during the offer period."
                },
                "Card Eligibility": {
                    "Applicable Cards": "HDFC Bank Credit Card EMI, Debit Card EMI & No Swipe EMI transactions.",
                    "Non-Applicable Cards": "Offer is NOT applicable on Debit Card Non-EMI, Credit Card Non-EMI transactions and Commercial or Corporate Cards.",
                    "Other Payment Methods": "Offer is NOT applicable on transactions made through Internet Banking or UPI payment option."
                },

                "Terms and Conditions": {
                    "Co-sponsors": "This offer ('Offer') is co-sponsored by HDFC Bank Limited (HDFC Bank / Bank) and Nexus. It is open to all residents of India holding a valid and current HDFC Bank Credit Card, Debit Card and No Swipe EMI ('Cardholder/You/Your' and 'Card').",
                    "Participation Conditions": {
                        "Participation Bound": "By participating in the Offer (defined below), Cardholder agree to be bound by: these terms and conditions ('T&C'); the Terms of Use, Privacy Policy and other relevant documentation including any modifications, alterations or updates thereof, that are published on the Platform; and all applicable terms and conditions of the Bank."
                    },
                    "Offer Eligibility": {
                        "Outstanding Amount": "All HDFC Bank Credit, Debit Cardholders & No Swipe EMI users with no outstanding of more than 30 days are eligible for this Offer.",
                        "Interest Rate": "The Bank charges annual interest rates according to the reducing monthly balance. In the monthly reducing cycle, the principal is reduced with every EMI and the interest is calculated on the outstanding balance."
                    },
                    "Penalty for Late Payments": {
                        "Additional Interest": "If the customer fails in timely payment of EMI, there may be additional interests/penalty which may be levied by the bank which may be higher than the discount offered under this scheme."
                    },
                    "Processing Fees": {
                        "Nexus Fees": "Nexus will not charge a processing fee for availing EMI option. Bank may however charge processing fee or cancellation charges as per the bank's policies."
                    },
                    "Cancellations and Refunds": {
                        "Processing Fees": "Such charges shall be paid by me and will not be refundable even in the event of return/cancellation of the order.",
                        "EMI Cancellation Terms": "Customer may check with the respective bank/issuer on how a cancellation, refund or pre-closure could affect the EMI terms, and what interest charges would be levied for the same."
                    },
                    "Non-applicable Payment Methods": "This Offer is NOT applicable on transactions made through Internet Banking/ UPI payment option.",
                    "Card-on-delivery": "The Offer is not applicable for Card-on-delivery transactions or orders converted from Cash On Delivery to Prepaid."
                },
                "Legal": {
                    "Indemnity": "The Cardholder shall indemnify and hold Nexus, against all damages, liabilities, costs, expenses, claims, suits and proceedings (including reasonable attorneys fee) that may be suffered by Nexus, the Bank and/ or seller as a consequence of (i) violation of these terms and conditions, of the terms of user agreement, privacy policy (subject to change) published on the Platform, by Cardholder; (ii) violation of applicable laws by Cardholder; and (iii) any action or inaction resulting in willful misconduct or negligence on the part of the Cardholder."
                },
            },

            {
                "Offer": {
                    "Description": "10% Instant Discount with IDFC FIRST Bank Credit Card EMI transactions on purchase of select products. Additional Instant Discount of up to INR 500 with IDFC FIRST Bank Credit Card EMI transactions on purchase of select products. Additional Instant Discount of up to INR 1000 with IDFC FIRST Bank Credit Card EMI transactions on purchase of select products. The bank offer discount that you are able to see on the Product page is applicable on select cards. To check if the discount is applicable on your card, enter the card details on the 'Payment' page and check the discount applied.",
                    "Offer Benefits": {
                        "Categories": "Sitewide excluding Grocery",
                        "Maximum Savings": "INR 3,000"
                    },
                    "Base Offers": {
                        "Instant Discount": "10%",
                        "Minimum Transaction Value": "INR 5,000",
                        "Maximum Discount": {
                            "Mobiles": "INR 1,000",
                            "Other Categories": "INR 1,500"
                        },
                        "Max Base Offer Per Card": "INR 1,500"
                    },
                    "Bonus Offers": {
                        "Bonus Offer 1": {
                            "Min Transaction Value": "INR 30,000",
                            "Additional Discount": "INR 500",
                        },
                        "Bonus Offer 2": {
                            "Min Transaction Value": "INR 50,000",
                            "Additional Discount": "INR 1,000",
                        }
                    },
                    "Refund Policy": "If the customer returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, they shall not be eligible for the Offer. The discount amount will be deducted from any refund(s) processed for the returned product(s). If an order is cancelled, the offer may take up to 24 hours to refresh for the customer to utilize again."
                },
                "Eligibility Conditions": {
                    "Eligible Products": "Offer is applicable on purchase of select products only. Offer will be listed on the product page for all eligible products.",
                    "Eligible Cards": "Offer is applicable only on EMI transactions for the existing and new IDFC FIRST Bank Credit Cardholders, excluding Corporate Cardholders. Not applicable on Internet Banking or UPI transactions.",
                    "Transaction Limit": {
                        "Base Offer": {
                            "Limit": "Maximum discount of INR 1,500 per Credit Card (EMI transactions)"
                        },
                        "Bonus Offer 1": {
                            "Limit": "Once per card during offer duration"
                        },
                        "Bonus Offer 2": {
                            "Limit": "Once per card during offer duration"
                        },
                        "Maximum Discount Per Card": {
                            "Amount": "Cumulative savings across all platforms of Nexus"
                        }
                    }
                },
                "How To Avail": {
                    "Instructions": [
                        "The Validity of the Program is from 6th September 2024 (00:00 Hours) to 15th September 2024 (23:59 Hours).",
                        "IDFC FIRST Bank Credit Cardholders are eligible to get a 10% instant discount on purchase of select products.",
                        "Discount is applied on the Net Cart Value (NCV) after all applicable discounts and exchange offer redemptions.",
                        "Base Offer discount requires a minimum NCV of INR 5,000.",
                        "Bonus Offer 1 discount requires a minimum product value of INR 30,000.",
                        "Bonus Offer 2 discount requires a minimum product value of INR 50,000."
                    ],
                    "Discount Details": {
                        "Maximum Base Offer Discount": {
                            "Mobiles": "INR 1,000 per Credit Card (EMI transactions)",
                            "Other Categories": "INR 1,500 per Credit Card (EMI transactions)"
                        },
                        "Maximum Bonus Offer 1 Discount": "INR 500 per Credit Card (EMI transactions)",
                        "Maximum Bonus Offer 2 Discount": "INR 1,000 per Credit Card (EMI transactions)"
                    }
                },
                "Other Terms And Conditions": {
                    "Validity": "Valid on Credit Card EMI transactions only.",
                    "Excluded Payments": ["Net Banking", "UPI"],
                    "Invalid Transactions": [
                        "Card-on-delivery",
                        "COD conversion to prepaid",
                        "Cancelled transactions",
                        "Disputed/unauthorized/fraudulent transactions"
                    ],
                    "Disqualification": "IDFC FIRST reserves the right to disqualify the Cardholder if any fraudulent activity is identified.",
                    "Refunds": "Discount will be applied only on net paid amount after discounts and exchanges.",
                    "PAN Card Requirement": {
                        "Condition": "Required for transactions equal to or above INR 2,00,000. Must upload PAN within 4 days."
                    },
                    "Liability": {
                        "Product Quality": "IDFC FIRST and Nexus are not liable for quality, merchantability, fitness, delivery or after-sales service."
                    },
                    "Disputes": {
                        "Arbitration Location": "Mumbai",
                        "Language": "English"
                    },
                    "Validity": "Only in India",
                    "Minimum Age": 18
                }
            },

            {
                "Offer Details": {
                    "What is the Offer?": "10% Instant Discount with Federal Bank Credit Card (Non-EMI & EMI Txns) and Debit Card (Non-EMI Txns) on purchase of select products. Additional Instant Discount of up to INR 2,500 with Federal Bank Credit Card (Non-EMI & EMI Txns) on purchase of select products. The Offer is NOT applicable on transactions made using Federal Bank Corporate & Commercial Card. The bank offer discount that you are able to see on the Product page is applicable on select cards. To check if the discount is applicable on your card, enter the card details on the 'Payment' page and check the discount applied.",
                    "Offer Benefits": {
                        "Categories": "Sitewide including Grocery & Travel",
                        "Maximum Offer Savings per Credit Card (Non-EMI & EMI Txns)": "INR 4,500",
                        "Maximum Offer Savings per Debit Card (Non-EMI Txns)": "INR 1,000",
                        "Credit Card Offer Construct": {
                            "Base Offers": {
                                "Sitewide including Grocery & Travel": {
                                    "Grocery": {
                                        "Minimum Cart Value": "INR 2,500",
                                        "Max Discount per card (Non-EMI & EMI transactions)": "INR 300"
                                    },
                                    "Mobiles": {
                                        "Minimum Cart Value": "INR 5,000",
                                        "Max Discount per card (Non-EMI transactions)": "INR 1,000",
                                        "Max Discount per card (EMI transactions)": "INR 1,500"
                                    },
                                    "Other Categories": {
                                        "Minimum Cart Value": "INR 5,000",
                                        "Max Discount per card (Non-EMI transactions)": "INR 1,500",
                                        "Max Discount per card (EMI transactions)": "INR 2,000"
                                    },
                                    "Maximum Base Offer Discount per Credit Card": "INR 2,000"
                                },
                                "Bonus Offers (Sitewide excluding Grocery)": {
                                    "Bonus Offer 1": {
                                        "Minimum Cart Value": "INR 24,999",
                                        "Max Discount per card (Non-EMI and EMI transactions)": "INR 500"
                                    },
                                    "Bonus Offer 2": {
                                        "Minimum Cart Value": "INR 49,999",
                                        "Max Discount per card (Non-EMI and EMI transactions)": "INR 1,000"
                                    },
                                    "Bonus Offer 3": {
                                        "Minimum Cart Value": "INR 74,999",
                                        "Max Discount per card (Non-EMI and EMI transactions)": "INR 1,000"
                                    },
                                    "Maximum Bonus Offer Discount per Credit Card": "INR 2,500"
                                }
                            }
                        },
                        "Debit Card Offer Construct": {
                            "Base Offers": {
                                "Sitewide including Grocery & Travel": {
                                    "Grocery": {
                                        "Minimum Cart Value": "INR 2,500",
                                        "Max Discount per card (Non-EMI transactions)": "INR 300"
                                    },
                                    "Mobiles": {
                                        "Minimum Cart Value": "INR 5,000",
                                        "Max Discount per card (Non-EMI transactions)": "INR 750"
                                    },
                                    "Other Categories": {
                                        "Minimum Cart Value": "INR 5,000",
                                        "Max Discount per card (Non-EMI transactions)": "INR 1,000"
                                    },
                                    "Maximum Base Offer Discount per Debit Card": "INR 1,000"
                                }
                            }
                        }
                    },
                    "Eligibility Conditions": {
                        "Product Eligibility": "The offer is applicable on purchase of select products. Offer will be listed on the product page, for all eligible products. Please check before making a purchase.",
                        "Travel Eligibility": "In order to avail the offer on Travel category, customers must enter the promo code 'FLYNOW' for Domestic Flights and International Flights respectively. The discount amount for travel bookings is calculated on the net payable amount minus the convenience fee.",
                        "Card Eligibility": "The Offer is applicable on Federal Bank Credit Card (Non-EMI & EMI Txns) and Debit Card (Non-EMI Txns) except for transactions made using Federal Bank Corporate or Commercial cards. Offer is NOT applicable on transactions made through Internet Banking or UPI."
                    },
                    "How to Avail the Offer": {
                        "Instructions": "The Offer is valid from 1st September 2024 (00:00 Hours) to 10th September 2024 (23:59 Hours). Under this Offer, Cardholders will get a 10% instant discount per Credit and Debit Card, on the purchase of select products on the platform during the offer duration. The discount will be applied to the Net Cart Value (NCV). NCV shall mean the total value of only the eligible product/s in the cart after all applicable discounts and exchange offer redemptions. The minimum Net Cart Value (NCV) to avail the Base Offer on Grocery is INR 2,500 and on all other categories is INR 5,000. The minimum NCV for Bonus Offers is as follows: INR 24,999 for Bonus Offer 1, INR 49,999 for Bonus Offer 2, and INR 74,999 for Bonus Offer 3."
                    },
                    "Other Terms and Conditions": {
                        "Details": [
                            "Offer is valid for Federal Bank Credit and Debit Cardholders, excluding Federal Bank Corporate & Commercial Cards",
                            "Offer is also applicable on Federal Bank Credit Card EMI transactions",
                            "This Offer is NOT applicable on transactions made through Internet Banking or UPI payment option",
                            "Offer not applicable for Card-on-delivery transactions",
                            "If an order is cancelled, the offer may take up to 24 hours to refresh for the customer to utilize it again."
                        ]
                    }
                }
            },
        ],
    },

    {
        "Membership Offers": [
            {
                "Offer": "Get 150 off on Nexus Prime membership on boAt products above INR 999",
                "Promotion Terms": [
                    "This INR 150 off on Nexus Prime membership on boAt products above INR 999 offer ('Offer') is provided by Imagine Marketing India Limited (boAt) ('Brand') and made available by Nexus.",
                    "By participating in this Offer, each customer expressly agrees that Nexus or any of its affiliates will not be liable or responsible for any loss or damage whatsoever that customer may suffer, directly or indirectly, in connection with this Offer, including but not limited to that associated with the customer’s use or delivery or misuse of any product purchased on Nexus.in or delivery or non-delivery of the products or the Benefits provided under this Offer.",
                    "In the event a customer fails to comply with any provision of these Offer Terms, such customer will not be eligible to receive the Benefit under this Offer.",
                    "The Benefit under this Offer will be provided to the Eligible Customer within 30 days of the delivery of the product.",
                    "The customer is not bound in any manner to participate in or avail the Offer. This Offer is being made purely on a 'best effort' basis and participating in or availing the Offer is voluntary.",
                    "The participation of customer will be deemed to be withdrawn from this Offer, if the purchase transaction: (a) is cancelled (for any reason whatsoever) by the customer or by Nexus; or (b) is returned by the customer or (c) the Nexus Prime Voucher is not redeemed by 30 November 2024 through the prescribed URL.",
                    "Brand reserves the right, at any time, without prior notice and without assigning any reason whatsoever, to add/alter/modify/change any or all these Offer Terms, or to replace, wholly or in part, this Offer by another offer, whether similar to this Offer or not.",
                    "Brand reserves the right to disqualify any customer from availing the Benefits under the Offer if it is found that any fraudulent activity is identified (such as publication or sale of Nexus Prime Voucher) as being carried out for the purpose of availing the Offer.",
                    "Brand undertakes no responsibility in case the Nexus Prime Voucher is lost, stolen, damaged or destroyed. The Brand shall not be obliged for replacement of the Nexus Prime Voucher in the identified circumstances.",
                    "Neither Nexus nor any of its affiliates make any warranty of any kind, express or implied in relation to this Offer (including, without limitation with respect to the status, fulfilment of the Offer or the Benefits). The customer hereby releases Nexus and its affiliates from liability of any kind relating to the mentioned above.",
                    "Nothing contained herein amounts to a commitment by Nexus and its affiliates to conduct further, similar or other offers.",
                    "All decisions related to the Offer are final and binding on the customer. Failure by Nexus and/or Brand to enforce any of these Offer Terms, in any instance, shall not be deemed to be a waiver of the Offer Terms and shall not give rise to any claim against Nexus and/or Brand by any person.",
                    "These Offer Terms are governed by the laws of India and the courts at New Delhi shall have exclusive jurisdiction over any disputes in relation to this Offer.",
                    "The Benefits under this Offer are not transferable, assignable or exchangeable. The Benefit cannot be negotiated or refunded, and under any circumstances, no cash equivalent will be given. Only the beneficiary being the Eligible Customer under the Offer himself or herself, and no other person or agent, may claim the Benefit.",
                    "Under no circumstances, will the Benefit provided under this Offer be settled in cash in lieu thereof.",
                    "Any customer availing this Offer shall be deemed to have accepted these Offer Terms."
                ],
                "FAQS": [
                    {
                        "Receiving Memberships": [
                            "Customers will receive an e-mail from Nexus containing the Nexus Prime Voucher code in form of an alphanumeric code between the period 5 August 2024 and 30 October 2024.",
                            "Customers must have a valid e-mail address registered with Nexus to be able to receive the e-mail.",
                            "The Offer is valid once per customer."
                        ]
                    },
                    {
                        "Claiming Prime Membership": [
                            "Copy the Nexus Prime Voucher from the email, and visit Nexus.in/vouchers.",
                            "Enter the voucher code (13-digit alphanumeric code) under ‘Claim New’.",
                            "Click on 'Add to your vouchers'. INR 150 (voucher amount) is now updated as your Prime Voucher balance.",
                            "Click on Prime Voucher to move to the next page and choose your Prime plan.",
                            "Pay through eligible voucher balance and pay balance amount through other payment modes (UPI, debit & credit cards, net banking).",
                            "Select address and complete your sign up journey.",
                            "Enjoy your Prime membership benefits."
                        ]
                    }
                ],
                "Redemption Conditions": [
                    "The code is valid till 30 November 2024.",
                    "If customer is not logged into Nexus account, he/she will be promoted to login to his/her account.",
                    "If the customer does not have a Nexus account, he/she will be prompted to create an account.",
                    "The Prime membership can only be claimed if the customer has a valid Nexus account.",
                    "Nexus Prime membership cannot be claimed through Business Accounts.",
                    "Nexus Prime Voucher cannot be used to purchase Prime membership plans if the customer has telecom provider (Airtel, VI, Jio etc.) activated Prime membership on the same Nexus account.",
                    "Existing Nexus Prime members who purchased Nexus Prime/Prime Lite membership via Google Play are not eligible to redeem Nexus Prime Voucher for extending/upgrading the Nexus Prime membership."
                ]
            },
        ]
    }
]