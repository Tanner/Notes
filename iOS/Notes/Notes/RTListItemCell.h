//
//  RTListItemCell.h
//  Notes
//
//  Created by Ryan Ashcraft on 2/14/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol RTListItemCellDelegate;

@interface RTListItemCell : UITableViewCell <UITextFieldDelegate>

@property (weak, nonatomic) id<RTListItemCellDelegate> delegate;
@property (strong, nonatomic) UITextField *textField;

@end

@protocol RTListItemCellDelegate <NSObject>

- (void)contentMightChangeInCell:(RTListItemCell *)cell;
- (void)content:(NSString *)newContent changedInCell:(RTListItemCell *)cell;

@end