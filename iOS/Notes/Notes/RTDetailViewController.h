//
//  RTDetailViewController.h
//  Notes
//
//  Created by Smith Tanner on 2/11/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import <UIKit/UIKit.h>
#include "RTListItemCell.h"

@protocol RTDetailViewControllerDelegate;

@interface RTDetailViewController : UIViewController <NSFetchedResultsControllerDelegate, UISplitViewControllerDelegate, UITableViewDelegate, UITableViewDataSource, RTListItemCellDelegate>

@property (weak, nonatomic) id<RTDetailViewControllerDelegate> delegate;

@property (strong, nonatomic) NSFetchedResultsController *fetchedResultsController;

@property (strong, nonatomic) id detailItem;

@property (strong, nonatomic) IBOutlet UITableView *tableView;

@end


@protocol RTDetailViewControllerDelegate <NSObject>

- (NSManagedObjectContext *)managedObjectContext;

@end