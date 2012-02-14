//
//  RTDetailViewController.h
//  Notes
//
//  Created by Smith Tanner on 2/11/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface RTDetailViewController : UIViewController <UISplitViewControllerDelegate, UITableViewDelegate, UITableViewDataSource>

@property (strong, nonatomic) id detailItem;

@property (strong, nonatomic) IBOutlet UITableView *tableView;

@end
