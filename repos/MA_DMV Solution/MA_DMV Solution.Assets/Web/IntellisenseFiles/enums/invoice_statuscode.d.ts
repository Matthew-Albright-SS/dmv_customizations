declare const enum invoice_statuscode {
    New = 1,
    PartiallyShipped = 2,
    Billed = 4,
    Booked_appliesToServices = 5,
    Installed_appliesToServices = 6,
    Canceled_deprecated = 3,
    PaidInFull_deprecated = 7,
    Complete = 100001,
    Partial = 100002,
    Canceled = 100003,
}
